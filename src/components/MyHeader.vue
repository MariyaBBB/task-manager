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
    components: { MyMenu },
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
    height: 105px;
    background: white;
    margin-top: -20px;
    padding-top: 20px;
 }
</style>