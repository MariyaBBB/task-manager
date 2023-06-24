<template>
    <div id="menu">
       <ul> 
            <li 
                @click="$router.push({name: 'Main'})">
                 Главная
            </li>
            <li 
                @click="$router.push({name: 'List'})">
                 Список
            </li>
       </ul>
        
    </div>
</template>

<script>

console.log(window.location.pathname);
export default ({
    name: "MyMenu",

    data() {
        return {
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
        border-bottom: 3px solid #d7d5d5;
    }
</style>