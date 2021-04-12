import { Request, Response } from 'express'
import { PersonModel } from '../model/person.model'
import { PersonInterface } from '../interface/person.interface'

export class PersonController {
    public static async FindAll(req: Request, res: Response): Promise<Response> {
        const data = await PersonModel.GetAll()
        return res.status(200).json(data)
    }

    public static async Create(req: Request, res: Response): Promise<Response> {
        const data: PersonInterface = req.body
        const response = await PersonModel.Create(data)
        return res.status(201).json(response)
    }
}