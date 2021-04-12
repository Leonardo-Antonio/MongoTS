import { Document } from 'mongoose'

export interface PersonInterface extends Document {
    name: string,
    last_name: string,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
}
