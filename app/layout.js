import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navigations/Navbar'
import Provider from './components/Provider'
import Footer from './components/navigations/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Berke SASA Portfolio',
  description: "Let's look my portfolio :)",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-sasaDark dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 caret-sasaGreenLM dark:caret-sasaGreenDM overflow-x-hidden`}>
        <Provider>
          <Navbar />
          <main className=''>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
