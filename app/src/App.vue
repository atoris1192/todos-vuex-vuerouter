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

    section.section.has-text-centered.has-background-dark
      form.form(@submit.prevent="inputTodo")
        .field.has-addons
        label.label Title
          .control
            input.input(type="text" placeholder="new Todo" v-model="title")
        .field
          label.label Message
          .control
            textarea.textarea(placeholder="Textarea" v-model="message")
          .control
            input.button.is-info(type="submit" value="Add")

    section.section.has-background-light
      ul.has-text-white.has-text-centered
        li.list.is-hoverrable.is-primary(v-for="item in getTodos")
          a.list-item.has-background-primary.has-text-white
            span ID: {{ item.id }} / 
            span Title: {{ item.title }} / 
            span isDone: {{ item.isDone }}


</template>
<script lang="ts">
import { mapGetters, mapActions, } from 'vuex';
import Vue from 'vue'

export default Vue.extend({
  data: () =>({
    title: '',
    message: '',
    todos: [],
    mainTodos: [],
  }),
  mounted() {
      this.todos = this.$store.state.todoData.todos;
      this.mainTodos = this.$store.state.todos;
  },
  computed: {
    ...mapGetters('todoData', ['getTodos', 'getTodoCount'])
    // ...mapGetters({
    //   getTodos: 'todo/getTodos',
    //   getTodoCount: 'todo/getTodoCount',
    // })
  },
  methods: {
    inputTodo() {
      const payload = {
        title: this.title,
        message: this.message,
      }
      this.$store.dispatch('todoData/addTodo', payload);
      this.title = '';
      this.message = '';
    }
    // inputTodo(e) {
    //   const item = {
    //     title: this.title,
    //     message: this.message,
    //   }
    //   this.addTodo(item);
    // },
    // ...mapActions({
    //   addTodo: 'addTodo'
    // })

      
  }
  
})
</script>