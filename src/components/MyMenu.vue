<template>
    <div id="menu">
       <ul> 
            <li 
                v-for="(menu, index) in menuData"
                :key="index"
                @click="$router.push({name: menu})">
                 {{ menu }} 
            </li>
       </ul>
        
    </div>
</template>

<script>


export default ({
    name: "MyMenu",

    data() {
        return {
            menuData: ['Main', 'List']
        }
    },

    computed: {
      
    },

})
</script>

<style >
    ul {
        display: grid;
        grid-template-columns: auto auto;
        gap: 35px;
        justify-content: center;
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    ul li {
        cursor: pointer;
        list-style-type: none;
        border-bottom: 1px solid gray;
    }
</style>