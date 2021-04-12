import dotenv from 'dotenv'
import { Server } from './app/server.app'
import { DB } from './db/connection.db'
(() => {
   dotenv.config() // llama al archivo .env
   DB.Connection()
   const app = new Server()
   app.Run()
})()