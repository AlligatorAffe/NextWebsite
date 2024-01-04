'use client'
import { useEffect } from 'react';
import Dialog from "../../components/Dialog";

function Login() {

  function onClose() {

    console.log("Modal has closed");
  }
  function onOk() {

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
