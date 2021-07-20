<template>
<div>
    <h3>Todos</h3>
    <div class="todos">
        <div v-for="todo in getTodos" :key="todo.id" class="todo">
            {{ todo.title }}
            <span @click="deleteTodo(todo.id)">X</span>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo'])
    },
    computed: mapGetters(['getTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>
<style>

</style>