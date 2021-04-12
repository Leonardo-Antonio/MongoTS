import express, { Application } from 'express'
import cors from 'cors'
import RouterPerson from '../router/person.router'

export class Server {
    private app: Application

    constructor() {
        this.app = express()
    }

    public Run() {
        this.settings()
        this.routers()
        this.listeing()
    }

    private settings() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    private routers() {
        this.app.use(process.env.URL_BASE + '/persons', RouterPerson)
    }

    private listeing() {
        this.app.listen(process.env.PORT)
        console.log('server on port ' + process.env.PORT)
    }
}