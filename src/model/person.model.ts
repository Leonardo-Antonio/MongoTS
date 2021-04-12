import EntityPerson from '../entity/person.entity'
import { PersonInterface } from '../interface/person.interface'

export class PersonModel {
    public static async Create(data: PersonInterface) {
        const person = new EntityPerson(data)
        const response = await person.save()
        return response
    }

    public static GetAll() {
        const persons = EntityPerson.find()
        return persons
    }
}