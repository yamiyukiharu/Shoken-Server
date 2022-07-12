import { createServer } from "http"
import mongoose from "mongoose";
import { app } from "./app"
import 'dotenv/config'

mongoose.connect(process.env.MONGO_ATLAS_URI)

const PORT = process.env.PORT || 8000

const server = createServer(app)

async function start() {
  server.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
  })
}

start()


