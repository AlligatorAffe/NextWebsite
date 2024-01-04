'use client'
import { useEffect } from 'react';
import Dialog from "../../components/Dialog";

function Login() {

  function onClose() {
    'use server'
    console.log("Modal has closed");
  }
  function onOk() {
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
