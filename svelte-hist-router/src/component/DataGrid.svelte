<script>
export let columns = []
export let data = [];
</script>

<table>
    <thead>
        <tr>
        {#each columns as column}
            <th>{column.name}</th>
        {/each}
        </tr>
    </thead>
    <tbody>
    {#each data as item}
        <tr>
        {#each columns as column}
            <th>{item}</th>
        {/each}
        </tr>
    {/each}
    </tbody>
    <tfoot></tfoot>
</table>