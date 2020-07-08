<template>
<div>
    <div v-if="!images">loading...</div>
    <details v-else v-for="image in images" v-bind:key="image.id">
        <summary>{{image.type}}</summary>
        <strong>{{image.id}}</strong> years old
        <br />
        lives in {{image.url}}
    </details>
</div>
</template>

<script>
export default {
  name: "ImageList",
  data() {
    return {
      images: null
    };
  },
  beforeMount() {
    this.fetchImagesData();
  },
  methods: {
    async fetchImagesData() {
      const res = await fetch(new Request("https://api.giphy.com/v1/gifs/search?api_key=3eFQvabDx69SMoOemSPiYfh9FY0nzO9x&q=cat&offset=0&limit=3" ));
      const { data } = await res.json();
      this.images = data;

    }
  }
};
</script>