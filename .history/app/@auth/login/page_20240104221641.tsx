
import { useEffect } from 'react';
import Dialog from "../../components/Dialog";

export default function Page() {
  return <div >
  <h1 >
      Welcome to my Dashboard
  </h1>
  <p>   <Link href="/">Home</Link></p>
  <p>   <Link href="/about">about</Link></p>
  <p>   <Link href="/blog">blog</Link></p>
</div>
}



  /*
  async function onClose() {

    //'use server'
    console.log("Modal has closed");
  }

  /*
  async function onOk() {

    //'use server'
    console.log("Ok was clicked");
  }
  */

/*
<Dialog
title="kj klj "
onClose={onClose}
onOk={onOk}>
<h1>Login</h1>

</Dialog>

*/