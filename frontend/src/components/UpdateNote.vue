<script>

import { useNoteStore } from '@/stores/NoteStore';

export default {
    data() {
        return {
            NoteStore: useNoteStore(),
            current_note: [],
            id: this.$route.params.id
        }
    },
    methods:{
        
    },
    created(){
        this.current_note = this.NoteStore.notes[this.id]
    }
}

</script>

<template>
<h1>Редактирование заметки</h1>
<input type="text" v-model="current_note.title" placeholder="title">
<input type="text" v-model="current_note.body" placeholder="body">
<button @click="NoteStore.updateNote(current_note)">Обновить</button>
<h2>{{ current_note }}</h2>
</template>

<style>


</style>