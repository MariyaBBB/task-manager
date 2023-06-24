<template>
    <div id="desk">
        <button @click="addTask"> + </button>
        <input type="text" placeholder="Название задачи" v-model="taskName" class="text">
      <ManagerTask />
    </div>
</template>

<script>
import tasks from "@/data/tasks";
import ManagerTask from "./ManagerTask.vue";

export default ({
    name: "ManagerDesk",

    components: { ManagerTask},
    data() {
        return {
            taskName: '',
            tasks
        
        }
    },

    methods: {
        addTask: function() {
            tasks.push({
                    name: this.taskName,
                    _id: Math.random().toString(36).substring(2, 7),
                    isCompleted: false,
                    })
            this.taskName = '';
        }
    }


})
</script>
<style>
#desk {
    width: 760px;
    background: white;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 40px;
    margin-top: 30px;
    border-left: 2px solid #d7d5d5;
    font-size: 20px;
}

button {
        border: 2px solid rgb(116, 205, 116);
        border-radius: 4px;
        background: white;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        color: rgb(116, 205, 116);
        font-size: 16px;
        cursor: pointer;
        margin-right: 12px;
    }

.text {
    height: 24px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    padding: 1px;
    border-bottom: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
}
</style>
