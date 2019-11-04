<template lang="pug">
  div
    section.section.has-text-centered
      h1.title todo app
      h2.sub-title {{ getTodoCount }}

    section.section.content.has-background-light
      h1 debug area
      p input: {{ title }} : {{ message }}
      p todos: {{ todos }}
      o mainTodos: {{ mainTodos }}

    Input
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
    ...mapGetters('todoData', ['getTodoCount'])
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