<template>
  <div>
    <h1>TodoList App</h1>
    <TodoInput @onButtonClick="handleAddTodo"/>
    <ul class="list">
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @onToggleClick="handleToggleTodo"
        @onDeleteClick="handleDeleteTodo"/>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Todo from '@/components/Todos';
import TodoInput from '@/components/TodoInput';

import { getAirData } from '@/service/todo.js';

export default {
  name: 'TodoList',
  components: {
    Todo,
    TodoInput,
  },
  computed: {
    ...mapState('todo', ['todos']),
  },
  methods: {
    ...mapActions('todo', ['getTodos', 'addTodo', 'deleteTodo', 'toggleTodo']),
    handleAddTodo(content) {
      if (content.trim() === '') {
        alert('You must type something !');
        return;
      }
      this.addTodo(content);
    },
    handleDeleteTodo(id) {
      this.deleteTodo(id);
    },
    handleToggleTodo(todo) {
      this.toggleTodo(todo);
    },
    async getAirDataFromVue() {
      const data = await getAirData();
      console.log(data);
    }
  },
  created() {
    this.getTodos();
    this.getAirDataFromVue();
  },
}
</script>

<style lang="scss" scoped>
.list {
  font-size: 1.5rem;
  width: 40%;
  margin: 0 auto;
  text-align: left;
  padding: 0 1rem;
}

</style>
