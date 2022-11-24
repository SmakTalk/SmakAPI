import dotenv from 'dotenv';
import { initializeApp, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

dotenv.config();
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = getDatabase();

export default db;