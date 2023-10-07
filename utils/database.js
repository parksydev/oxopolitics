import { MongoClient } from "mongodb";
import { redirect } from 'next/navigation';

const crypto = require('crypto');

const url = 'mongodb+srv://admin:admin@tutorial.mzfesy5.mongodb.net/?retryWrites=true&w=majority';
const options = { useNewUrlParser: true };
let connectDB;

connectDB = new MongoClient(url, options).connect();

export { connectDB };

export async function handleSubmit(formData) {
  'use server';  

  const hash = 'sha512'
  const encoding = 'base64'
  
  const cryptoId = crypto.createHash(hash).update(formData.get('id')).digest(encoding);
  const cryptoPassword = crypto.createHash(hash).update(formData.get('password')).digest(encoding);

  const data = {
    id: cryptoId,
    password: cryptoPassword,
    date: new Date(),
  };

  const db = (await connectDB).db('login');
  await db.collection('logindata').insertOne(data);
  redirect('/login/instagram');
}