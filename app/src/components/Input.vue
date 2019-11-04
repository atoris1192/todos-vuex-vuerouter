<template lang="pug">
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
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions, } from 'vuex';

export default Vue.extend({
  data: () =>({
    title: '',
    message: '',
  }),
    methods: {
    inputTodo(e) {
      const item = {
        title: this.title,
        message: this.message,
      }
      this.addTodo(item); // mapActions -> addTodo
      this.$emit('inputData', { // 親要素へのデータ渡し debug input
        title: this.title,
        message: this.message,
      })
      this.title = '';
      this.message = '';
    },
    ...mapActions('todoData', ['addTodo'])
  }
});
</script>