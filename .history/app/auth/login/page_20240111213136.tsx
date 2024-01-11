"use client"
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";



export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async(e: SyntheticEvent) => {
    e.preventDefault();
    /*
  
    try{
      const response = await fetch('/api/login', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({email,password}),
      })
      if ( response.ok){
        router.push('/dashboard') 
      } else {
        console.log('FAILURE login');
        const data= await response.json();
        console.log(data.error);
      }
    } catch(error){
      console.error('An error during login',error);
    }
    */
    //API ANROP HÄR!!!!
    
    
  }
    return (
      <div className="py-28">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
        <header>
          <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
        </header>   
        <form onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"></input>
          </div>
          <div>          
            <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"></input>
          </div>       
          </form>  
          <footer>
            <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
            <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
          </footer>   
        </div>
      </div>
    )
  }

//function userRouter() {
  //throw new Error("Function not implemented.");
//}
  