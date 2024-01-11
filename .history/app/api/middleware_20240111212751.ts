import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse, NextPage } from 'next'
export function authenticateToken(req: NextApiRequest, res:NextApiResponse, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}