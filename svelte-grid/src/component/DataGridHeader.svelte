<script>
export let freezeCol = 0;
export let leftColumns = [];
export let rightColumns = [];
export let leftWidth = 0;
export let rightWidth = 0;
export let gridLoading = true;
</script>

<thead>
    <th class:hide={freezeCol < 1} style="width:{leftWidth}px;">
        <table class="grid-table-widget" class:hide={gridLoading} style="width:100%">
            <tr>
            {#each leftColumns as column}
                <th style="width:{column._width}px;"> {column.name}</th>
            {/each}
            </tr>
        </table>
    </th>
    <th style="width:{rightWidth}px;">
        <table class="grid-table-widget" style="width:{rightWidth}px;" class:hide={gridLoading}>
            <tr>
            {#each rightColumns as column}
                <th style="width:{column._width}px;">{column.name}</th>
            {/each}
            </tr>
        </table>
    </th>
</thead>
<style>

table{
    border-spacing: 0;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
    table-layout: fixed;
}

th{
    padding: 0;
}

.grid-canvas .grid-table-widget th{
    border-left: 1px solid black;
    border-top: 1px solid black;
    text-overflow:ellipsis; overflow:hidden; white-space:nowrap;
}
.grid-canvas .grid-table-widget th:last-child{
    border-right: 1px solid black;
}
.grid-canvas .grid-table-widget tr:last-child{
    border-bottom: 1px solid black;
}

.hide{
    display: none;
}
</style>