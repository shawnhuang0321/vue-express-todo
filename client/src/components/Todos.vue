<template>
  <li class="list__item">
    <span
      :class="{completed: todo.isCompleted}">{{todo.content}}</span>
    <span class="list__btn-group">
      <button
        @click="handleToggleClick(todo.id)">&#10004;</button>
      <button
        @click="handleOnClick(todo.id)">&#10008;</button>
    </span>
  </li>
</template>

<script>
export default {
  name: 'Todos',
  props: {
    todo: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    handleOnClick(id) {
      this.$emit('onDeleteClick', id);
    },
    handleToggleClick() {
      const todo = {
        ...this.todo,
        isCompleted: !this.todo.isCompleted,
      }
      this.$emit('onToggleClick', todo);
    }
  },
}
</script>

<style lang="scss" scoped>
.list {

  &__item {
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;
  }

  &__btn-group {
    display: inline-block;

    button {
      margin-right: 1rem;
    }
  }
}

.completed {
  text-decoration: line-through;
  color: red;
}
</style>
