import { Schema, model } from 'mongoose'
import { PersonInterface } from '../interface/person.interface'

const personSchema: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    updated_at: {
        type: Date,
    },
    deleted_at: {
        type: Date,
    },
})

export default model<PersonInterface>('person', personSchema)