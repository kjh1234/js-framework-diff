<script>
export let columns = [];
export let data = [];
export let focus = {}
export let rightColumns = [];
export let rightWidth = 0;
export let setFocus;
export let gridLoading;
</script>

<table class="grid-table-widget" style="width:{rightWidth}px;" class:hide={gridLoading}>
    {#each data as item, row}
        <tr>
        {#each rightColumns as column, index}
            <td class="i-{row}-{column.id}" style="width:{column._width}px;"
                class:focus="{focus.row === row && focus.col === columns.length - rightColumns.length + index}"
                on:click={setFocus.add}>{item[column.id]}</td>
        {/each}
        </tr>
    {/each}
</table>

<style>

table{
    border-spacing: 0;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
    table-layout: fixed;
}

.grid-canvas .grid-table-widget td{
    padding: 0;
    border-left: 1px solid black;
    border-top: 1px solid black;
    text-overflow:ellipsis; overflow:hidden; white-space:nowrap;
}
.grid-canvas .grid-table-widget td:last-child{
    border-right: 1px solid black;
}
.grid-canvas .grid-table-widget tr:last-child{
    border-bottom: 1px solid black;
}
.focus{
    background-color: pink;
}
</style>
