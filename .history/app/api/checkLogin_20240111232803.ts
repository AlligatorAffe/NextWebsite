


"use server"

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("ouihfp9ufhpfhpiuowefhewfhfewpiohwefpiuowehfpiewfhifupweh")
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log("iNNE I DENNA ");

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        console.log("Fel i nummer 1");
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        console.log("Fel i nummer 2");
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      console.log("SUCCESS");
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error during login", error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).end(); // Metoden är inte tillåten om det inte är en POST-förfrågan
}

/*
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
const router = express.Router();



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log("iNNE I DENNA ")

    const user = await prisma.user.findUnique({ where:{ email }});
    if(!user){
      console.log("fel i nummer 1")
      return res.status(401).json({error: ' invalid email or password'});
    }
    const passwordMatch = await bcrypt.compare(password, user.passowrd);
    if (!passwordMatch){
      console.log("fel i nummer 2")
      return res.status(401).json({error: 'invalid email or password'});
    }
    return res.status(200).json({sucess:true});
    console.log("SUCCCEESSS")
  }
}

*/
