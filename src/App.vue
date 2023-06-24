<template>
  <div id="app">
    <MyHeader />
   
    <RouterView/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    MyHeader

  }
}
</script>

<style >
h1 {
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
  background: #f0f0f0;
}

</style>


