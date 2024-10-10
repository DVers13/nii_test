import HomePage from '@/components/HomePage.vue'
import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

const wrapper = mount(HomePage, {
  global: {
    plugins: [createTestingPinia()],
  },
});

describe("HomePage", () => {
    test("Проверка запуска HomePage", () => {
      wrapper
    });
  });