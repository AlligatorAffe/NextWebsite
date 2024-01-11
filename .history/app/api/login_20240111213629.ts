"use server"

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
const router = express.Router();



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const {email, passowrd } = req.body;
    console.log("iNNE I DENNA ")

    const user = await prisma.user.findUnique({ where:{ email }});
    if(!user){
      return res.status(401).json({error: ' invalid email or password'});
    }
    const passwordMatch = await bcrypt.compare(passowrd, user.passowrd);
    if (!passwordMatch){
      return res.status(401).json({error: 'invalid email or password'});
    }
    return res.status(200).json({sucess:true});
  }
})

module.exports = router;


// pages/api/login.ts


//export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Validate user login against the database
    // Perform your authentication logic here
    // You may want to use a library like bcrypt to securely compare passwords
