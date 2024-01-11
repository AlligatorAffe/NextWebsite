
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  // Authenticate user
  const { email, password } = req.body;

  if (email === 'example@example.com' && password === 'password') {
    const token = jwt.sign({ email }, 'secret_key');
    res.status(200).json({ message: 'Authentication successful', token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
}