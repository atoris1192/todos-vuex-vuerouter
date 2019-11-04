
<template lang="pug">
  section.section.has-text-centered.has-background-danger
    form.form(@submit.prevent="inputTodo")
      .field.has-addons
      label.label.has-text-light EditTitle
        .control
          input.input(type="text" placeholder="new Todo" v-model="title")
      .field
        label.label.has-text-light EditMessage
        .control
          textarea.textarea(placeholder="Textarea" v-model="message")
        .control
          input.button.is-info(type="submit" value="Update")
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions, } from 'vuex';

export default Vue.extend({
  data: () =>({
    title: '',
    message: '',
  }),
  created() {
    
    // this.title = 'dfsadfa'
    this.title = this.getTodo.title;
    this.message = this.getTodo.message;
  },
  computed: {
    ...mapGetters('todoData', ['getTodo']),
  },
  methods: {
    // inputTodo(e) {
    //   const item = {
    //     title: this.title,
    //     message: this.message,
    //   }
    //   this.addTodo(item); // mapActions -> addTodo
    //   this.$emit('inputData', { // 親要素へのデータ渡し debug input
    //     title: this.title,
    //     message: this.message,
    //   })
    //   this.title = '';
    //   this.message = '';
    // },
    // ...mapActions('todoData', ['addTodo'])
  }
});
</script>