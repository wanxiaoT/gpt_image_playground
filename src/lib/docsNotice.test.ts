import { describe, expect, it, vi } from 'vitest'
import { DOCS_NOTICE_DISMISSED_STORAGE_KEY, dismissDocsNotice, isDocsNoticeDismissed } from './docsNotice'

function createStorage(initialValue: string | null = null) {
  let value = initialValue
  return {
    getItem: vi.fn(() => value),
    setItem: vi.fn((key: string, nextValue: string) => {
      if (key === DOCS_NOTICE_DISMISSED_STORAGE_KEY) value = nextValue
    }),
  }
}

describe('docs notice dismissed state', () => {
  it('reads and writes the dismissed state from storage', () => {
    const storage = createStorage()

    expect(isDocsNoticeDismissed(storage)).toBe(false)

    dismissDocsNotice(storage)

    expect(storage.setItem).toHaveBeenCalledWith(DOCS_NOTICE_DISMISSED_STORAGE_KEY, 'true')
    expect(isDocsNoticeDismissed(storage)).toBe(true)
  })

  it('keeps the notice visible when storage is unavailable', () => {
    const storage = {
      getItem: vi.fn(() => {
        throw new Error('storage unavailable')
      }),
      setItem: vi.fn(() => {
        throw new Error('storage unavailable')
      }),
    }

    expect(isDocsNoticeDismissed(storage)).toBe(false)
    expect(() => dismissDocsNotice(storage)).not.toThrow()
  })
})
