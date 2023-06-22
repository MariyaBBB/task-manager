<template>
  <div id="app">
    <h1> Task Manager </h1>
    <router-link to="/">Главная</router-link>
    <router-link to="/list">Список</router-link>
    <RouterView/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style >
h1 {
  text-align: center;
}
</style>


