import { useEffect } from 'react';
import Dialog from "../../components/Dialog";

function Login() {
  useEffect(() => {
    // Klientrelaterad kod
    console.log("Component is mounted on the client.");
    // Placera här koden för att visa modalen vid behov
  }, []);

  async function onClose() {
    'use server'
    console.log("Modal has closed");
  }

  async function onOk() {
    'use server'
    console.log("Ok was clicked");
  }

  return (
    <>
      <Dialog
        title="kj klj "
        onClose={onClose}
        onOk={onOk}>
        <h1>Login</h1>
        {/* Resterande kod för inloggning */}
      </Dialog>
    </>
  );
}

export default Login;
