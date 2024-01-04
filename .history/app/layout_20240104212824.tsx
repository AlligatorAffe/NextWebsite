import './globals.css'
import { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'Home',
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
  return (
    <html lang="en">
     
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-yellow-500 p-4">
            <h1 className="text-2xl font-bold text-white">Min Header</h1>
          </header>
          {children}
          <div className='pt-20'>
            <footer className='bg-white rounded-md pt-5'>
              <h3 className='text-black text-center text-sm align-middle'>Alfred Olsson</h3>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}