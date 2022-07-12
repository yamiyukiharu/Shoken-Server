import mongoose from "mongoose";
import { createServer } from "http";
import admin from 'firebase-admin'
import {cert} from 'firebase-admin/app'
import { app } from "./app";
import "dotenv/config";

mongoose.connect(process.env.MONGO_ATLAS_URI);


admin.initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  })
})


const PORT = process.env.PORT || 8000;

const server = createServer(app);

async function start() {
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

start();
