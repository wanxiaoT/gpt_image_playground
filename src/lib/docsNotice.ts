export const DOCS_NOTICE_DISMISSED_STORAGE_KEY = 'gpt-image-playground.docsNoticeDismissed'

type DocsNoticeStorage = Pick<Storage, 'getItem' | 'setItem'>

function getDocsNoticeStorage(): DocsNoticeStorage | null {
  if (typeof window === 'undefined') return null
  return window.localStorage
}

export function isDocsNoticeDismissed(storage: DocsNoticeStorage | null = getDocsNoticeStorage()): boolean {
  try {
    return storage?.getItem(DOCS_NOTICE_DISMISSED_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function dismissDocsNotice(storage: DocsNoticeStorage | null = getDocsNoticeStorage()) {
  try {
    storage?.setItem(DOCS_NOTICE_DISMISSED_STORAGE_KEY, 'true')
  } catch {
    // localStorage 不可用时只关闭当前会话中的组件状态。
  }
}
