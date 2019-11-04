<template lang="pug">
  section.section.has-background-light
    ul.has-text-white.has-text-centered
      li.list.is-hoverrable.is-primary(v-for="item in getTodos")
        a.list-item.has-background-primary.has-text-white
          span ID: {{ item.id }} / 
          span Title: {{ item.title }} / 
          span isDone: {{ item.isDone }}
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions, } from 'vuex';

export default Vue.extend({
    computed: {
    ...mapGetters('todoData', ['getTodos'])
  },
  
})
</script>