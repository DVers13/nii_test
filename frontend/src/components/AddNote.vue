<script>
import { useNoteStore } from '@/stores/NoteStore';

export default {
    data() {
        return {
            NoteStore: useNoteStore(),
            current_note: {
                title: "",
                body: ""
            }
        }
    }
}
</script>

<template>
<h1>Добавление заметки</h1>
<input type="text" v-model="current_note.title" placeholder="title">
<input type="text" v-model="current_note.body" placeholder="body">
<button @click="NoteStore.addNote(current_note)">Добавить</button>
<p>{{ current_note }}</p>
</template>

<style>
</style>