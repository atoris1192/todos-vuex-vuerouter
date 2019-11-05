<template lang="pug">
  div
    section.section.has-text-centered
      h1.title todo app
      h2.sub-title {{ getTodoCount }}
      button.button( @click="todoPurge") Purge

    router-view
    List


</template>
<script lang="ts">

import Vue from 'vue'
import { mapGetters, mapActions, } from 'vuex';
import  Input  from './components/Input';
import  List  from './components/List';

export default Vue.extend({
  data: () =>({
    title: '',
    message: '',
    todos: [],
    mainTodos: [],
  }),
    computed: {
    ...mapGetters('todoData', ['getTodoCount', 'getTodos'])
  },
  methods: {
    todoPurge() {
      let newTodos = this.getTodos.slice();
      const items = newTodos.filter( todo => {
        return !todo.isDone;
      })
      this.setTodos(items);
    },
    ...mapActions('todoData', ['setTodos']),
  },
  mounted() {
      this.todos = this.$store.state.todoData.todos;
      this.mainTodos = this.$store.state.todos;
  },
  components: {
    Input,
    List,
  },
})
</script>