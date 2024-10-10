<script>

import { useNoteStore } from '@/stores/NoteStore';

export default {
    data() {
        return {
            NoteStore: useNoteStore(),
            current_note: null,
            id: this.$route.params.id,
            flag_update: false
        }
    },
    methods: {

    },
    created() {
        this.current_note = this.NoteStore.notes[this.id] || null;
    }
}

</script>

<template>
    <div class="container edit">
        <h1 class="text">Редактирование заметки</h1>
        <textarea v-if="current_note" class="title" type="text" @click="flag_update = false" v-model="current_note.title"
            placeholder="title" />
        <textarea v-if="current_note" class="body" type="text" @click="flag_update = false" v-model="current_note.body" placeholder="body" />
        <button class="icon_button" @click="NoteStore.updateNote(current_note); flag_update = true"><i
                class="fa fa-refresh" aria-hidden="true"></i> Refresh</button>
        <h1 v-if="flag_update" class="text update">Заметка обновлена</h1>
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