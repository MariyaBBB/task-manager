import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        addTask(ctx, newTask) {
            const task = {
                name: newTask,
                _id: Math.random().toString(36).substring(2, 7),
                isCompleted: false,
                }
            ctx.commit('updateTask', task)
        }
    },
    mutations: {
        updateTask: function(state, task) {
            state.tasks.push(task);
        }
    },
    state: {tasks: [
        {
            _id: "u1324j",
            name: "Create task manager",
            isCompleted: true,
        }
    ]},
    getters: {
        allTasks(state) {
            return state.tasks
        }
    }
})