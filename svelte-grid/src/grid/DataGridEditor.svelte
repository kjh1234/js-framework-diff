<script>
export let grid
export let columns = []
export let data = []
export let editorWidget = {}
export let focus = {}
export let editorKeyDown;

function init(el){
    if(!focus.el){
        return;
    }
    editorWidget.value = data[focus.row][columns[focus.col].id];
    let gridRect = grid.getBoundingClientRect();
    let clientRect = focus.el.getBoundingClientRect();
    editorWidget.width = clientRect.width;
    editorWidget.height = clientRect.height;
    editorWidget.top = clientRect.top - gridRect.top;
    editorWidget.left = clientRect.left - gridRect.left;

    setTimeout(function(){
        el.focus();
        el.select();
    }, 0)
}
</script>

<div class="editor-widget" style={editorWidget.anchor?
    'width:'+editorWidget.width+'px; height:'+editorWidget.height+'px; top:'+editorWidget.top+'px; left:'+editorWidget.left+'px;'
    : 'width:0; height:0px; top:'+editorWidget.top+'px; left:'+editorWidget.left+'px;'}>
{#if focus.row === -1 || focus.col === -1}
    &nbsp;
{:else}
    <input type="text" class="input-widget" use:init 
        on:keydown={editorKeyDown} 
        bind:value={editorWidget.value } />
{/if}
<p>
focus.row: <input type="number" bind:value={focus.row}/>
focus.col: <input type="number" bind:value={focus.col}/>
</p>
</div>

<style>

.editor-widget{
    position: absolute;
    overflow: hidden;
    top: -1px;
    left: -1px;
    width: 0;
    height: 0;
}

.input-widget{
    width: 100%;
    height: 100%;
}

</style>