import App from "@/App.vue";
import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils';

const wrapper = mount(App);

describe("App", () => {
    test("Проверка запуска App", () => {
      wrapper
    });
  });