const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
const router = express.Router();



router.post('/login',async(req: NextApiRequest, res: NextApiResponse) => {
  const {email, passowrd } = req.body;

  const user = await prisma.user.findUnique({ where:{ email }});
  if(!user){
    return res.status(401).json({error: ' invalid email or password'});
  }
  const passwordMatch = await bcrypt.compare(passowrd, user.passowrd);
  if (!passwordMatch){
    return res.status(401).json({error: 'invalid email or password'});
  }
  return res.status(200).json({sucess:true});
})

module.exports = router;