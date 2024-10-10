import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import AddNote from '@/components/AddNote.vue';


const wrapper = mount(AddNote, {
    global: {
        plugins: [createTestingPinia()],
    },
    data() {
        return {
            current_note: {
                title: "",
                body: ""
            },
            flag_create: false
        }
    }
});

describe("AddNote", () => {
    test("Проверка работоспособности триггеров", () => {
        wrapper.find('button').trigger('click')
        wrapper.find('.title').trigger('click')
        wrapper.find('.body').trigger('click')
    });
});