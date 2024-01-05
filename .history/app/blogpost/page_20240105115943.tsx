'use client'

import { title } from "process"
import React, {useState, useEffect } from "react"




export default function Page(){
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
      textBodyImage:"https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
    }
  ])
//Add item to database
/*
  const addItem = async (e) => {
    e.preventDefault()
  } 
*/




    return (
      <div className="max-w-screen-xl mx-auto p-16">
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {articleData.map((article) => (
          <div
            key={article.articleId}
            className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 px-8">
              <img
                src={article.userImage}
                className="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 className="text-lg mb-3 font-semibold">{article.title}</h4>
              </a>
              <p className="mb-2 text-sm text-gray-600">{article.textBody}</p>

              <img
                src={article.textBodyImage}
                className="w-100"
              />
              <hr className="mt-4" />
              <span className="text-xs">ARTICLE</span>
              &nbsp;<span className="text-xs text-gray-500">
                {article.articleId}
              </span>
            </div>
          </div>
        ))}

            <div
                className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
                <div className="py-4 px-8">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12 mb-4"/>
                    <a href="#">
                        <h4 className="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                    </a>
                    <p className="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s</p>

                    <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100"/>

                    <hr className="mt-4"/>
                    <span className="text-xs">ARTICLE</span>
                    &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
                </div>
            </div>

            <div
                className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
                <div className="py-4 px-8">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12 mb-4"/>
                    <a href="#">
                        <h4 className="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                    </a>
                    <p className="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the standard dummy text ever since the 1500s  </p>

                    <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100"/>

                    <hr className="mt-4"/>
                    <span className="text-xs">ARTICLE</span>
                    &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
                </div>
            </div>
        </div>
    </div>
    )
}