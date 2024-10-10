<script>
import { useNoteStore } from '@/stores/NoteStore';

export default {
    data() {
        return {
            NoteStore: useNoteStore(),
            current_note: {
                title: "",
                body: ""
            },
            flag_create: false
        }
    }
}
</script>

<template>
    <div class="container edit">
        <h1 class="text">Добавление заметки</h1>
        <textarea class="title" type="text" @click="flag_create = false" v-model="current_note.title"
            placeholder="title" />
        <textarea class="body" type="text" @click="flag_create = false" v-model="current_note.body" placeholder="body" />
        <button class="icon_button" @click="NoteStore.addNote(current_note); flag_create = true"><i
                class="fa fa-plus-square-o" aria-hidden="true"></i> Add Note</button>
        <h1 v-if="flag_create" class="text">Заметка создана</h1>
    </div>
</template>

<style scoped>
.title {
    width: 60%;
    height: 50px;
    resize: none;
}

.body {
    width: 60%;
    height: 200px;
    resize: none;
}

.text {
    color: white;
}

.edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}
</style>