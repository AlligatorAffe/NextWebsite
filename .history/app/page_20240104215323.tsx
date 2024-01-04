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

</div>
}