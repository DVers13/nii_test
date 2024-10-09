import { defineStore } from 'pinia'
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000', // Тут наверное в .env вынести надо
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const useNoteStore = defineStore('noteStore', {
    state: () => {
        return { notes: [] }
    },
    actions: {
        refreshStore() {
            apiClient.get(`/notes/`).then((response) => {
                this.notes = response.data
            })
        },
        deleteNote(note_id, index) {
            apiClient.delete(`/notes/${note_id}`)
            this.notes.splice(index, 1)
        },
        updateNote(new_note) {
            apiClient.put(`/notes/`, { 'title': new_note.title, 'body': new_note.body }, {
                params: {
                    'note_id': new_note.id
                }
            })
        },
        addNote(new_note) {
            apiClient.post(`/notes/`, { 'title': new_note.title, 'body': new_note.body })
        }
    },
})