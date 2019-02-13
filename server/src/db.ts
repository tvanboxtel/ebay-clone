import { createConnection } from 'typeorm'

export default () =>
    createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/ebayclone',
        entities: [
            //Entities
        ],
        synchronize: true, // for development
        logging: true
        // namingstrategy?
    })
    .then(_ => console.log('Connected to Postgres with TypeORM'))