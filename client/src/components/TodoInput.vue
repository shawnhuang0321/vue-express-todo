<template>
  <div style="margin-bottom: 1rem;">
    <input
      v-model="content"
      class="input__area"
      type="text">
    <button
      @click="handleOnClick"
      class="input__btn">Add Todo</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      content: '',
    }
  },
  methods: {
    handleOnClick() {
      this.$emit('onButtonClick', this.content);
      this.content = '';
    }
  },
}
</script>

<style lang="scss" scoped>
.input__area {
  width: 30%;
  height: 2rem;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding-left: 1rem;
}

.input__btn {
  font-size: 1rem;
  background: transparent;
  padding: .5rem 2rem;
  margin-left: 1rem;
  border-radius: .25rem;
  cursor: pointer;
  transition: all .2s;

  &:hover, &:focus {
    color: white;
    background: green;
  }
}
</style>
