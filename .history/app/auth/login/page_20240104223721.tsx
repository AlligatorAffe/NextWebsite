import Dialog from "../../components/Dialog"

'use client'

export default function Page() {
  
  
  function onClose() {
    //'use server'
    console.log("Modal has closed");
  }
  
  function onOk() {
    //'use server'
    console.log("Ok was clicked");
  }
  return (
    <div >
        <h1>hej</h1>
      <Dialog
        title="Login bro"
        onClose={onClose}
        onOk={onOk}>
        <h1>Login</h1>
      </Dialog>
      
  </div>
  )
  }
  