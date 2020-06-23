<template>
  <div>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/about" exact>About</router-link>
    <router-link to="/imageList" exact>GIF 검색</router-link>
    <router-link to="/users" exact>Users</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  text-align: center;
}
</style>