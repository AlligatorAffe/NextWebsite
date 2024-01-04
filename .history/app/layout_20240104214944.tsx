import './globals.css'
import { Metadata } from 'next'
import Link from 'next/link'




export const metadata: Metadata = {
  title: 'My webbpage',
  description: 'Welcome to Next.js',
}

/**
 * 
 * 
 * 
 * 
 * 
 * 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

 */

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blogpost', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50 text-black">
        <div className="flex-grow">
          <header className="bg-yellow-500 p-8">
            <h1 className="text-2xl font-bold text-white">Min Header</h1>
          </header>
          
          <nav className="bg-white p-3">
            <ul className="flex space-x-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {children}
        </div>
        <footer className="bg-white rounded-md p-3">
          <h3 className="text-black text-center text-sm font-medium">Alfred Olsson</h3>
        </footer>
      </body>
    </html>

  )
}