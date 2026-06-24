import { useState } from 'react'
import { dismissDocsNotice, isDocsNoticeDismissed } from '../lib/docsNotice'
import { CloseIcon } from './icons'

const DOCS_URL = 'https://naapi.apifox.cn/9072164m0'

export default function DocsNoticeBanner() {
  const [visible, setVisible] = useState(() => !isDocsNoticeDismissed())

  if (!visible) return null

  const handleDismiss = () => {
    dismissDocsNotice()
    setVisible(false)
  }

  return (
    <section className="mb-7 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50/70 to-cyan-50/70 px-4 py-5 shadow-sm dark:border-blue-400/20 dark:from-blue-950/40 dark:via-indigo-950/25 dark:to-cyan-950/25 sm:px-6 sm:py-6">
      <div className="flex items-start gap-2 sm:gap-4">
        <h2 className="min-w-0 text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-[26px]">
          image2 生图 · 使用文档
        </h2>
        <button
          type="button"
          onClick={handleDismiss}
          className="mt-0.5 shrink-0 rounded-lg bg-white/60 p-1.5 text-gray-500 ring-1 ring-black/5 transition-colors hover:bg-white hover:text-gray-700 dark:bg-white/10 dark:text-gray-400 dark:ring-white/10 dark:hover:bg-white/15 dark:hover:text-gray-200 sm:ml-auto"
          aria-label="关闭使用文档提示"
          title="关闭"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="max-w-4xl">
        <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:text-base">
          注册账号 -&gt; 创建密钥（分组选择 <span className="font-semibold text-gray-900 dark:text-gray-100">gpt生图</span>） -&gt; 在设置中填入 API URL 与 Key 即可开始生图。
        </p>
        <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center">
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          >
            查看完整文档
          </a>
          <span>
            钠API QQ群 <span className="font-medium text-gray-700 dark:text-gray-200">1046028388</span>
          </span>
        </div>
      </div>
    </section>
  )
}
