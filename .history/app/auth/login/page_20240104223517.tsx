import Dialog from "../../components/Dialog"

export default function Page() {
  
  
  async function onClose() {
    'use server'
    console.log("Modal has closed");
  }
  
  async function onOk() {
    'use server'
    console.log("Ok was clicked");
  }
  return (
    <div >
        
      <Dialog
        title="Login bro"
        onClose={onClose}
        onOk={onOk}>
        <h1>Login</h1>
      </Dialog>
      
  </div>
  )
  }
  