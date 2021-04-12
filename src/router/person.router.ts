import { Router } from 'express'
import { PersonController } from '../controller/person.controller'

const router = Router()

router
    .get('/', PersonController.FindAll)
    .post('/', PersonController.Create)

export default router