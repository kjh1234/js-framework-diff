<script>
import DataGridBodyLeft from './DataGridBodyLeft.svelte';
import DataGridBodyRight from './DataGridBodyRight.svelte';

export let freezeCol = 0;
export let columns = [];
export let data = [];
export let leftColumns = [];
export let rightColumns = [];
export let focus = {}
export let leftWidth = 0;
export let rightWidth = 0;
export let gridLoading = true;
export let setFocus;
</script>

<tbody>
    <tr>
        <td class:hide={freezeCol < 1} style="width:{leftWidth}px;">
            <DataGridBodyLeft bind:data={data} bind:focus={focus} bind:leftColumns={leftColumns}
             bind:gridLoading={gridLoading} setFocus={setFocus} />
        </td>
        <td style="width:{rightWidth}px;">
            <DataGridBodyRight bind:columns={columns} bind:data={data} bind:focus={focus}
             bind:rightColumns={rightColumns} bind:rightWidth={rightWidth}
             bind:gridLoading={gridLoading} setFocus={setFocus} />
        </td>
    </tr>
</tbody>



<style>

td{
    padding: 0;
}

.hide{
    display: none;
}
</style>