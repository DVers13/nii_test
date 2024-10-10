<template>
    <div v-if="!NoteStore.notes || !NoteStore.notes.length" class="container">
        <h1>Заметок нет. Давай попробуем их создать!</h1>
    </div>
    <div v-else class="container">
        <Note v-for="(el, index) in NoteStore.notes" :key="index" :note="el" :index="index" />
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
    created() {
        this.NoteStore.refreshStore()
    }
}
</script>

<style scoped>
h1 {
    color: white;
}

.title {
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 40px;
    padding: 20px;
    justify-content: space-around;
}
</style>