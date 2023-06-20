<template>
  <div id="app">
    <h1> Task Manager </h1>
    <my-component> </my-component>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'

export default {
  name: 'App',
  components: {
   MyComponent
  }
}
</script>

<style >
h1 {
  text-align: center;
}
</style>


