<template>
    <div id="header">
        <h1> Task Manager </h1>
        <MyMenu />
        
    </div>
</template>

<script>
import MyMenu from './MyMenu.vue'
export default ({
    name: "MyHeader",
    components: {MyMenu},
    data() {
        return {
            
        
        }
    },

    computed: {
      
    },

})
</script>

<style >
 #header {
    height: 62px;
 }
</style>