<template lang="pug">
  div
    section.section.has-text-centered
      h1.title todo app
      h2.sub-title {{ getTodoCount }}
    section.section.has-text-centered
      label.label Title
      .field.has-addons
        .control
          input.input(type="text" placeholder="new Todo")
        .control
          a.button.is-info
            | Add
      .field
        label.label Message
        .control
          textarea.textarea(placeholder="Textarea")

    section.section
      ul.has-text-white.has-text-centered
        li.list.is-hoverrable.is-primary(v-for="item in getTodos")
          a.list-item.has-background-primary.has-text-white
            span ID: {{ item.id }} / 
            span Title: {{ item.title }} / 
            span isDone: {{ item.isDone }}


</template>
<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue'

export default Vue.extend({
  computed: {
    ...mapGetters({
      getTodos: 'todo/getTodos',
      getTodoCount: 'todo/getTodoCount',
    })
  }
  
})
</script>