<script>
import { onMount, beforeUpdate, afterUpdate } from 'svelte';
let images = null;

onMount(() => {
  let data = fetchImagesData();
});

async function fetchImagesData() {
  const res = await fetch("https://api.giphy.com/v1/gifs/search?api_key=3eFQvabDx69SMoOemSPiYfh9FY0nzO9x&q=cat&offset=0&limit=3");
  const { data } = await res.json();
  images = data;
}

</script>

{#if !images}
  loading...
{:else}
  {#each images as image}
  <details >
    <summary>{image.type}</summary>
    <strong>{image.id}</strong> years old
    <br />
    lives in {image.url}
  </details>
  {/each}
{/if}