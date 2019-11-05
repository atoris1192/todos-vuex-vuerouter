<template lang="pug">
  section.section.has-background-light
    ul.has-text-white.has-text-centered
      li.list.is-hoverrable.is-primary( v-for="item, index in getTodos" )
        span.list-item.has-background-primary.has-text-white
          input.checkbox(type="checkbox")
          span ID: {{ item.id }} / 
          span Title: {{ item.title }} / 
          span isDone: {{ item.isDone }}
          button.button( @click="editShowTodo(item)") Edit
          button.button( @click="deleteTodo(item)") Delete
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions, } from 'vuex';

export default Vue.extend({
    computed: {
    ...mapGetters('todoData', ['getTodos'])
  },
  methods: {
    editShowTodo(item) {
      const id = item.id;
      this.$router.push({ name: 'edit', params: { id }})
      this.setTodo(item); // mapActions -> setTodo
    },
    deleteTodo(item) {
      let newTodos = this.getTodos.slice();
      const pos = newTodos.map(todo => {
        return todo.id;
      }).indexOf(item.id)
      if (pos === -1) {
        console.log("List.vue deleteTodo nothing id");
        return
      }
      newTodos.splice(pos, 1);
      this.setTodos(newTodos);
    },
    ...mapActions('todoData', ['setTodo', 'setTodos']),
  }
})
</script>