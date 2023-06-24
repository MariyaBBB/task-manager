<template>
    <div id="list">
       <ManagerDesk />
       
    </div>
</template>

<script>
import ManagerDesk from "@/components/ManagerDesk.vue"
export default ({
    name: "ListView",
    components: { ManagerDesk },
    data() {
        return {
            
        
        }
    },

    computed: {
      
    },

})
</script>

<style>
#list {
    
    height: 100vh;
  
}
</style>