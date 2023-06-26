<template>
    <div id="task" >
        <div 
            class="container"
            v-for="task in allTasks" 
            :key="task.id"
            @click="task.isCompleted = !task.isCompleted "
           >
            <div class="round" >
                <input 
                    type="checkbox" 
                    @click="task.isCompleted = !task.isCompleted"
                    :checked="task.isCompleted" 
                    id="checkbox" />
                <label for="checkbox"></label>
                
            </div>

            <div :class="{task, checked: task.isCompleted}" > {{ task.name }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default ({
    name: "ManagerTask",
    computed: mapGetters(['allTasks']),

    data() {
        return {
           
        }
    },


})

</script>
<style>
.container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: stretch;
    justify-content: stretch;
    gap: 30px;
    height: 100%;
}
.task {
    padding-top: 4px;
    font-size: 20px;
    cursor: pointer;
}
.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.checked {
    text-decoration: line-through;
}





</style>

