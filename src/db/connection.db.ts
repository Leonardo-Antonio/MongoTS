import mongoose from 'mongoose'

export class DB {
    public static Connection() {
        try{
            mongoose.connect('mongodb://localhost/amorcitoDB', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log('Bases de datos conectada')
        } catch (error) {
            throw error // lansa un error
        }
    }
}