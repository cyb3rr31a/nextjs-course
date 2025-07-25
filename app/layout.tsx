import "./globals.css";
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'], 
})

export const metadata = {
  title: 'My Portfolio',
  description: ' My complete portfolio along with the projects'
};

export default function RootLayout({ 
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className='bg-cyan-700 text-white p-4'>
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/portfolio/">Portfolio</Link>
          </nav>
        </header>
        <main className='p-6'>{ children }</main>
        <div>
          <ThemeToggle />
        </div>
        <footer className='p-4 text-center text-white bg-cyan-700 mt-10'>
          © 2025 Rebecca&apos;s Portfolio
        </footer>
      </body>
    </html>
  )
}