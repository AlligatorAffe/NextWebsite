import React from "react"




import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request successful' });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'POST request successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

/*
export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await fetch('https://data.mongodb-api.com/product/${id}', {
        headers:{
            'Content-Type': 'application/json'
            'API-Key':process.env.DATA_API_KEY!,
        },
    })
    const product = await res.json()
    return Response.json({ product })
}
*/