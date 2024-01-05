'use client'

import { title } from "process"
import React, {useState, useEffect } from "react"
import { collection, addDoc } from 'firebase/firestore'
import Link from "next/link"
import router, { useRouter } from "next/router"


export default function Page(){
  const handleReset = () => {
    // Navigate to the desired page using the router
    router.push('/blogpost');
  }
  const[articleData, setArticleData] = useState([
    { articleId:1,
      userImage:"https://tailwindcss.com/img/jonathan.jpg",
      title:"How to be effective at working remotely?",
      textBody:"ijrgoiejgorejgoergjerogijeogijegoiej ejgoeirgj jgeoijg ioejr oeirgj oegi jegrg",
      textBodyImage:"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
    },    
    { 
      articleId:2,
      userImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.allers.se%2Fuploads%2F2016%2F05%2Fkatt-ber.jpg&f=1&nofb=1&ipt=59ee8677b35f4fabbe3e782f26cecc9b32c7d02920c776357fadce7be2a269cc&ipo=images",
      title:"How to effectivly destroy everything?",
      textBody:"ijrgoiejgorejgoergjerogijeogijegoiej ejgoeirgj jgeoijg ioejr oeirgj oegi jegrg",
      textBodyImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresize.prod.docfr.doc-media.fr%2Fimg%2Fvar%2Fdoctissimo%2Fstorage%2Fimages%2Ffr%2Fwww%2Fpsychologie%2Fdictionnaire-des-reves%2Freve-d-explosion%2F3205880-1-fre-FR%2Freve-d-explosion.jpg&f=1&nofb=1&ipt=a45e85f09b177ad74d42140990d7ebbfa541d29099928cc747d4311dc6d7af43&ipo=images"
    },
    { 
      articleId:3,
      userImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vilse.nu%2Fmedia%2F43168%2Fkatt_svartvit__20190612_184638__1001x1001.jpg%3Fwidth%3D748&f=1&nofb=1&ipt=accd15e68505d30696e4caf010a04ea5cdce1fc67b35bf1695ac93f4f9249142&ipo=images",
      title:"How to effectivly destroy everything?",
      textBody:"ijrgoiejgorejgoergjerogijeogijegoiej ejgoeirgj jgeoijg ioejr oeirgj oegi jegrg",
      textBodyImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresize.prod.docfr.doc-media.fr%2Fimg%2Fvar%2Fdoctissimo%2Fstorage%2Fimages%2Ffr%2Fwww%2Fpsychologie%2Fdictionnaire-des-reves%2Freve-d-explosion%2F3205880-1-fre-FR%2Freve-d-explosion.jpg&f=1&nofb=1&ipt=a45e85f09b177ad74d42140990d7ebbfa541d29099928cc747d4311dc6d7af43&ipo=images"
    }
  ]);
  const [newArticle,setNewArticle] = useState({
    articleId:"",
    userImage:"",
    title:"",
    textBody:"",
    textBodyImage:"",
  })
//Add item to database

  const addItem = async (e) => {
    e.preventDefault()
  } 

  // Read item from database


  // delete item from database




  return (
    <div className="max-w-screen-xl mx-auto p-16">
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">

    </div>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
        <div className="text-center pb-6">
          <h1 className="text-3xl">Contact Us!</h1>
          <p className="text-gray-300">Fill up the form below to send us a message.</p>
        </div>

        <form>
  <input
    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Name"
    name="name"
  />

  <input
    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="email"
    placeholder="Email"
    name="email"
  />

  <input
    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Subject"
    name="_subject"
  />

  <textarea
    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Type your message here..."
    name="message"
    style={{ height: "121px" }}
  ></textarea>

  <div className="flex justify-between">
    <input
      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      value="Send ➤"
    />
    <input
      className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="reset" 
      onClick={handleReset}/>
  </div>
</form>
      </div>
    </div>
  </div>
    
  )
}