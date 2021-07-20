import axios from "axios"

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo One'
        },
        {
            id: 2,
            title: 'Todo Two'
        },
        {
            id: 3,
            title: 'Todo Three'
        }
    ]
}

const getters = {
    getTodos: state => state.todos
}

const actions = {
    async fetchTodos({ commit }) {
        const res = await axios.get("http://localhost:3000/todos");

        commit('setTodos', res.data);
    },
    async addTodo({ commit }, title) {
        const res = await axios.post("http://localhost:3000/todos", { title, completed: false });

        commit('addTodo', res.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`http://localhost:3000/todos/${id}`);

        commit('removeTodo', id);
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo: (state, todo) => state.todos = [todo, ...state.todos],
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}