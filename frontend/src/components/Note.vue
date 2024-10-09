<template>
    <div class="note">
        <h2 class="title text">{{ note.title }}</h2>
        <p class="body text">{{ note.body }}</p>
        <div class="action">
            <RouterLink class="icon_button" :to="{ name: 'current', params: { id: index } }"><i
                    class="fa fa-pencil"></i></RouterLink>
            <button class="icon_button" @click="NoteStore.deleteNote(note.id, index)"><i
                    class="fa fa-trash"></i></button>
        </div>
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
.action {
    padding-bottom: 20px;
    gap: 20px;
    display: flex;
    flex-direction: row;
}

.text {
    /* text-wrap: wrap; */
    /* word-wrap: break-word; */
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.title {
    -webkit-line-clamp: 2;
    padding-top: 50px;
}

.body {
    -webkit-line-clamp: 12;
}

.note {
    margin: 5px;
    gap: 15px;
    background: linear-gradient(0deg, rgb(199, 242, 243) 0%, rgb(194, 237, 191) 45%, rgb(241, 213, 153) 100%);
    border: 3px solid black;
    border-radius: 4px;
    margin: 1;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;

}
</style>