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
          button.button Delete
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
    ...mapActions('todoData', ['setTodo']),

  }
})
</script>