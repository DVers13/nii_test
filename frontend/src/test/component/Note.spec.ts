import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Note from '@/components/Note.vue'; // Замените на правильный путь к вашему компоненту
import { createTestingPinia } from '@pinia/testing';
import { useNoteStore } from '@/stores/NoteStore';

describe('Note', () => {
    const noteMock = {
        id: 1,
        title: 'Test Note Title',
        body: 'This is the body of the test note.'
    };

    const indexMock = 0;

    test('Тест рендера заголовка и тела заметки', () => {
        const wrapper = mount(Note, {
            global: {
                plugins: [createTestingPinia()],
            },
            props: {
                note: noteMock,
                index: indexMock,
            },
        });

        expect(wrapper.find('.title.text').text()).toBe(noteMock.title);
        expect(wrapper.find('.body.text').text()).toBe(noteMock.body);
    });

    test('Нажатие кнопки удаления вызывает NoteStore.deleteNote', async () => {
        const deleteNoteMock = vi.fn().mockResolvedValueOnce();
        const pinia = createTestingPinia({
            initialState: {
                noteStore: {
                    notes: [noteMock], // Добавляем заметку для тестирования
                },
                stubActions: false,
            },
        });

        const noteStore = useNoteStore();
        noteStore.deleteNote = deleteNoteMock;

        const wrapper = mount(Note, {
            global: {
                plugins: [pinia],
            },
            props: {
                note: noteMock,
                index: indexMock,
            },
        });

        const deleteButton = wrapper.find('button.icon_button.del');
        expect(deleteButton.exists()).toBe(true);

        await deleteButton.trigger('click');

        expect(deleteNoteMock).toHaveBeenCalledWith(noteMock.id, indexMock);
    });
});
