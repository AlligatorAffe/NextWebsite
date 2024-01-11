import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { resolve } from 'path';

const prisma = new PrismaClient()

async function main() {
  let adminPass = '123456'
  const hashedPassword = await hashingAndSalt(adminPass);
  console.log('Hashed Password:', hashedPassword);
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.create({
    data : {
      email: 'Amin@admin.com',
      name: 'Admin',
      password: hashedPassword,
    },
  })
  console.log(user)
}

async function hashingAndSalt(password){
  return new Promise((resolve,reject)=>{
    bcrypt.genSalt(10, function (saltError, salt){
      if (saltError){
        return (saltError)
      } else {
        bcrypt.hash(password,salt, function(hashError, hash){
          if (hashError){
            reject(hashError)
          }
          console.log(password)
          password = hash
          console.log(password)
          resolve(hash)
          
        })
      }
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })