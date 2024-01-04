import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'

/*
export default function Page() {
  return <div >
      <h1 >
        Welcome to my website
      </h1>
    </div>
  
}
*/


export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return <div >
  <h1 >
    Welcome to my website
  </h1>
  <p>   <Link href="/dashboard">Dashboard</Link></p>
  <p>   <Link href="/about">about</Link></p>
  <p>   <Link href="/blogpost">Blog</Link></p>
  <p>   <Link href="/login">Login</Link></p>
</div>
}