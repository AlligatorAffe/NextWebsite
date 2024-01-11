import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'GET request successful' });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'POST request successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}