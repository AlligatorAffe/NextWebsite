

import Link from 'next/link'




export default function Page(){
    return <div >
    <h1 >
        Welcome to my Dashboard
    </h1>
    <p>   <Link href="/">Home</Link></p>
    <p>   <Link href="/about">about</Link></p>
    <p>   <Link href="/blog">blog</Link></p>
  </div>
}