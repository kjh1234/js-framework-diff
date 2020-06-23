<script>
import { onMount, beforeUpdate, afterUpdate } from 'svelte';
import DataGridEditor from './DataGridEditor.svelte';
import DataGridHeader from './DataGridHeader.svelte';
import DataGridBody from './DataGridBody.svelte';
import {KEY_CODES} from '../utils/keyCode.js';

export let options = {}
export let columns = []
export let data = [];

const gridId = 'grid-' + (new Date()).getTime();
const DEFALUT_OPTIONS = {
    freezeCol: 0,
    freezeRow: 0,
    width: 500,
    height: 400,
    fixed: true
}
const DEFALUT_COLUMN = {}

let grid;
let focus = { col: -1, row: -1};
let selected = { startCol: -1, endCol: -1, startRow: -1, endRow: -1};
let editorWidget = {
    width: 0,
    height: 0,
    top:0,
    left:0,
    anchor: false,
    value: ''
}

let /*leftWidth, rightWidth,*/ gridLoading = true;

$: _freezeCol = getFreezeCol(options.freezeCol);
$: _leftColumns = columns.slice(0, _freezeCol);
$: _rightColumns = columns.slice(_freezeCol);
$: _width = isNaN(options.width)? options.width: options.width + "px";
$: _height = isNaN(options.height)? options.height: options.height + "px";

$: leftWidth = _leftColumns.reduce((a,b) => a + b._width,0) + (_leftColumns.length + (_leftColumns.length? 1: 0));
$: rightWidth = _rightColumns.reduce((a,b) => a + b._width,0) + (_rightColumns.length + (_rightColumns.length? 1: 0));

Object.entries(DEFALUT_OPTIONS).forEach(e => {
    if(!options.hasOwnProperty(e[0])){
        options[e[0]] = e[1];
    }
});
Object.entries(DEFALUT_COLUMN).forEach(e => {
    columns.forEach(column => {
        if(!column.hasOwnProperty(e[0])){
            column[e[0]] = e[1];
        }
    });
});



//options = Object.assign({}, DEFALUT_OPTIONS, options)
let emptyWidthColumns;
onMount(() => {
    grid = document.getElementById(gridId);
    
    let gridWidth = grid.offsetWidth;
    gridWidth = gridWidth - columns.length - (_leftColumns.length > 0? 2: 1);   //Border 갯수만큼 사이즈에서 제거

    let totalWidth = columns.map(e => e.width||0).reduce((a, b) => a + b, 0);
    let emptyWidth = gridWidth - totalWidth;
    emptyWidthColumns = columns.map((e, i) => e.width? -1: i)
        .reduce((a, b) =>{
            if(b > -1){
                a.push(b);
            }
            return a;
        }, []);
    emptyWidthColumns.forEach(e => {
       columns[e].width =  (emptyWidth / emptyWidthColumns.length) / gridWidth * 100;
    });
    columns.forEach((e, i) => {
        if(columns.length-1 > i){
            e._width = Math.floor(e.width * gridWidth / 100);
        }else{
            e._width = gridWidth - columns.map(e => e._width).slice(0, -1).reduce((a,b) => a + b, 0)
        }
    });

    // leftWidth = _leftColumns.reduce((a, b) => a + b._width, 0) + (_leftColumns.length + (_leftColumns.length? 1: 0));
    // rightWidth = _rightColumns.reduce((a, b) => a + b._width, 0) + (_rightColumns.length + (_rightColumns.length? 1: 0));
    gridLoading = false;
});

const setFocus = (function(){
    let nextTarget = [], isRun = false, action;

    let run = function(){
        if(isRun || nextTarget.length === 0){
            console.log(isRun + ' || ' + nextTarget.length)
            return;
        }
        isRun = true;

        console.log(nextTarget.length)

        let target = nextTarget[nextTarget.length -1];
        nextTarget = [];

        //focus.row = focus.col = -1;
        // setTimeout(function(){
            _setFocus(target);
            isRun = false;
        //    if(nextTarget.length > 0){
        //        setTimeout(run, 16);
        //    }
        // }, 0);

    }
    let _setFocus = function(target){
        let entry, index, value, col;
        let entries = target.classList.entries();
        focus.el = null;
        //focus.row = focus.col = -1;
        
        while(!(entry = entries.next()).done){
            if((value = entry.value[1]).startsWith('i-')){
                value = value.substr(2);
                index = value.indexOf('-');
                col = value.substr(index+1);

                focus.row = parseInt(value.substr(0, index));
                focus.col = columns.map(c => c.id).findIndex(c => c == col, 0);
                focus.el = target;
                return;
            }
        }
    }
    return {
        add: function(e){
            nextTarget.push(e.target);
            // setTimeout(run, 16);
            run();
        }
    }
})();

function getFreezeCol(col){
    return isNaN(col)
        ? columns.map(c => c.id).findIndex(c => c == col, DEFALUT_OPTIONS.freezeCol) 
        : col;
}

function editorKeyDown(e){
    //editorWidget.anchor = true;
    if(KEY_CODES.ENTER === e.keyCode && KEY_CODES.RETURN === e.keyCode){
        editorWidget.anchor = true;
    }else if(KEY_CODES.UP === e.keyCode){
        focus.row--;
        setFocus.add({ target: grid.querySelector('.i-' + focus.row + '-' + columns[focus.col].id)});
        e.preventDefault();
    }else if(KEY_CODES.DOWN === e.keyCode){
        focus.row++;
        setFocus.add({ target: grid.querySelector('.i-' + focus.row + '-' + columns[focus.col].id)});
        e.preventDefault();
    }else if(KEY_CODES.LEFT === e.keyCode){
        focus.col--;
        setFocus.add({ target: grid.querySelector('.i-' + focus.row + '-' + columns[focus.col].id)});
        e.preventDefault();
    }else if(KEY_CODES.RIGHT === e.keyCode){
        focus.col++;
        setFocus.add({ target: grid.querySelector('.i-' + focus.row + '-' + columns[focus.col].id)});
        e.preventDefault();
    }

}
</script>

<div id="{gridId}" class="grid-canvas" style="width: {_width}; height: {_height}">
leftWidth: <input type="number" bind:value={leftWidth}/>
rightWidth: <input type="number" bind:value={rightWidth}/>
    <p>{_rightColumns.length} {rightWidth} {_leftColumns.reduce((a, b) => a + b.width, 0)}</p>
    <table>
        <DataGridHeader bind:freezeCol={_freezeCol} bind:leftColumns={_leftColumns} bind:rightColumns={_rightColumns}
         bind:leftWidth={leftWidth} bind:rightWidth={rightWidth} bind:gridLoading={gridLoading} setFocus={setFocus}/>
        <DataGridBody bind:freezeCol={_freezeCol} bind:columns={columns} bind:data={data} bind:focus={focus} 
         bind:leftColumns={_leftColumns} bind:rightColumns={_rightColumns}
         bind:leftWidth={leftWidth} bind:rightWidth={rightWidth} bind:gridLoading={gridLoading} setFocus={setFocus}/>
    </table>
    
    <DataGridEditor bind:grid={grid} bind:columns={columns} bind:data={data}
     bind:editorWidget={editorWidget} bind:focus={focus} editorKeyDown={editorKeyDown} />
</div>

<style>
.grid-canvas{
    padding: 0;
    margin: 0;
    font-size: 9pt;
    position: relative;
}

.grid-canvas table{
    border-spacing: 0;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
    table-layout: fixed;
}

</style>