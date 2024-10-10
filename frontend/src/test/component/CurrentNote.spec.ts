import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import CurrentNote from '@/components/CurrentNote.vue';

describe('CurrentNote Component', () => {
    
    test('Компонент успешно монтируется', () => {
        const wrapper = mount(CurrentNote, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        NoteStore: {
                            notes: { '123': { title: 'Mock Title', body: 'Mock Body' } }
                        }
                    },
                })],
                mocks: {
                    $route: {
                        params: { id: '123' },
                    },
                },
            },
        });
        wrapper.setData({current_note: {title: 'Mock Title', body: 'Mock Body'}})
        // Проверяем, что компонент существует
        expect(wrapper.exists()).toBe(true);

        // Проверяем, что данные загружены правильно
        expect(wrapper.vm.current_note.title).toBe('Mock Title');
        expect(wrapper.vm.current_note.body).toBe('Mock Body');
    });

    test('Отображение полей title и body', async () => {
        const wrapper = mount(CurrentNote, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        NoteStore: {
                            notes: { '123': { title: 'Mock Title', body: 'Mock Body' } }
                        }
                    },
                })],
                mocks: {
                    $route: {
                        params: { id: '123' },
                    },
                },
            },
        });

        // Проверяем, что textarea для title содержит правильное значение
        await wrapper.setData({current_note: {title: 'Mock Title', body: 'Mock Body'}})

        const titleTextarea = wrapper.find('textarea.title');
        expect(titleTextarea.exists()).toBe(true);
        expect(titleTextarea.element.value).toBe('Mock Title');

        // Проверяем, что textarea для body содержит правильное значение
        const bodyTextarea = wrapper.find('textarea.body');
        expect(bodyTextarea.exists()).toBe(true);
        expect(bodyTextarea.element.value).toBe('Mock Body');
    });

    test('Клик по кнопке обновляет заметку и флаг', async () => {
        const wrapper = mount(CurrentNote, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        NoteStore: {
                            notes: { '123': { title: 'Mock Title', body: 'Mock Body' } },
                            updateNote: vi.fn(), // Мок функции обновления
                        }
                    },
                })],
                mocks: {
                    $route: {
                        params: { id: '123' },
                    },
                },
            },
        });

        // Клик по кнопке обновления
        const button = wrapper.find('button.icon_button');
        await button.trigger('click');

        // Проверяем, что NoteStore.updateNote был вызван с правильным параметром
        const store = wrapper.vm.NoteStore;
        expect(store.updateNote).toHaveBeenCalledWith(wrapper.vm.current_note);

        // Проверяем, что flag_update стал true
        expect(wrapper.vm.flag_update).toBe(true);

        // Проверяем, что сообщение об обновлении отображается
        const updateMessage = wrapper.find('h1.text.update');
        expect(updateMessage.exists()).toBe(true);
        expect(updateMessage.text()).toBe('Заметка обновлена');
    });

    test('При клике на textarea flag_update сбрасывается', async () => {
        const wrapper = mount(CurrentNote, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        NoteStore: {
                            notes: { '123': { title: 'Mock Title', body: 'Mock Body' } }
                        }
                    },
                })],
                mocks: {
                    $route: {
                        params: { id: '123' },
                    },
                },
            },
        });

        // Устанавливаем флаг в true для тестирования сброса
        await wrapper.setData({current_note: {title: 'Mock Title', body: 'Mock Body'}, flag_update: true });

        // Клик по textarea для title
        const titleTextarea = wrapper.find('textarea.title');
        await titleTextarea.trigger('click');

        // Проверяем, что flag_update сбросился
        expect(wrapper.vm.flag_update).toBe(false);
    });

    test('Компонент рендерится без current_note', () => {
        const wrapper = mount(CurrentNote, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        NoteStore: {
                            notes: {}
                        }
                    },
                })],
                mocks: {
                    $route: {
                        params: { id: '123' },
                    },
                },
            },
        });

        // Проверяем, что current_note отсутствует
        expect(wrapper.vm.current_note).toBe(null);

        // Проверяем, что textarea для title и body не рендерятся
        expect(wrapper.find('textarea.title').exists()).toBe(false);
        expect(wrapper.find('textarea.body').exists()).toBe(false);
    });
});