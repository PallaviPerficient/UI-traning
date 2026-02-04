import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
// import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const initial = (saved as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <>
      <Head>
        <title>Pallavi Kanfade – Frontend Developer | AEM UI Developer</title>
        <meta name="description" content="Portfolio of Your Name, Frontend Developer specializing in React, Next.js, Tailwind CSS, and UI/UX." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Your Name – Frontend Developer" />
        <meta property="og:description" content="Selected projects, experience, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourname.dev" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
        <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
      </div>
    </>
  )
}
