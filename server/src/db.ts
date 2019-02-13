import { createConnection } from 'typeorm'
import Advertisement from '../src/advertisements/entity'

export default () =>
    createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/ebayclone',
        entities: [
            Advertisement,
            //Entities
        ],
        synchronize: true, // for development
        logging: true
        // namingstrategy?
    })
    .then(_ => console.log('Connected to Postgres with TypeORM'))