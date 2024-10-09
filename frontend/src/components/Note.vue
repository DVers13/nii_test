<template>
    <div class="note">
        <p>{{ note.title }}</p>
        <p>{{ note.body }}</p>
        <RouterLink :to="{name: 'update', params: { id: index }}">Редактировать</RouterLink>
        <button @click="NoteStore.deleteNote(note.id, index)">Удалить</button>
    </div>
</template>

<script>
import { useNoteStore } from '@/stores/NoteStore';

export default {
    data() {
        return {
            NoteStore: useNoteStore()
        }
    },
    props: {
        note: Object,
        index: Number
    }
}
</script>

<style scoped>
.note {
    margin: 5px;
    background: white;
    border-radius: 4px;
    margin: 1;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

}
</style>