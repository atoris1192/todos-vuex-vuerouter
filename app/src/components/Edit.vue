
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
    const id = this.$route.params.id
    const item = this.getTodoId(id)
    this.title = item.title;
    this.message = item.message;
    
    
    // this.title = this.getTodo.title;
    // this.message = this.getTodo.message;
  },
  computed: {
    ...mapGetters('todoData', ['getTodos', 'getTodoId']),
  },
  methods: {
    inputTodo(e) {
      const id = this.$route.params.id;
      
      let newTodos = this.getTodos.slice();
      console.log('newTodos',newTodos);
      
      const item = {
        id: id,
        title: this.title,
        message: this.message,
      }
      // console.log(item);
      const pos = newTodos.map(item => {
        return item.id;
      }).indexOf(id);
      // console.log("Pos: ",pos);
      if (pos === -1) {
        console.error("Edit.vue inputTodo: ID が　取得できません");
        return
      }
      
      newTodos.splice(pos, 1, item)
      // console.log('splice: ',newTodos);
      this.setTodos(newTodos);
      this.title = '';
      this.message = '';
      this.$router.push({ name: 'input'})
    },
    ...mapActions('todoData', ['setTodos'])
  }
});
</script>