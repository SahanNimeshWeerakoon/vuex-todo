<template>
    <div>
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit="handleSubmit">
                <input type="text" v-model="title" placeholder="Add Todo..." />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddTodos',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        handleSubmit(e) {
            e.preventDefault();

            this.addTodo(this.title);
        }
    }
}
</script>
<style></style>