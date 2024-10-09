<template>
    <div class="container">
      <Note v-for="(el, index) in NoteStore.notes" :key="index" :note="el" :index="index"/>
    </div>
      
  </template>
  
  <script>
  import Note from './Note.vue';
  import { useNoteStore } from '@/stores/NoteStore';
  
  export default {
  
    components: {
      Note
    },
    data() {
      return {
        NoteStore: useNoteStore()
      }
    },
      created(){
        this.NoteStore.refreshStore()
    }
  }
  </script>
  
  <style scoped>
  
  .title{
    align-items: center;
      justify-content: center;
  }
  
  .container{
    display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    padding-top: 40px;
    padding: 20px;
    justify-content: space-around;
  }
  </style>
  