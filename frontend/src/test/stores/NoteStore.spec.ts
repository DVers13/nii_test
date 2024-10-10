import { describe, test, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useNoteStore } from '@/stores/NoteStore'

describe('Data Store Test', () => {
  let store = null

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useNoteStore()
  })

  test('initializes with correct values', () => {
    expect(store.notes.length).toEqual(0)
  })
})