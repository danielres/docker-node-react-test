import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    host: 'db',
    password: process.env.PGPASSWORD,
    user: process.env.PGUSER,
  },
  pool: { min: 0, max: 7 },
})

db
  .raw(`CREATE DATABASE ${process.env.PGDB}`)
  .then(() => {
    console.log(`DB ${process.env.PGDB} READY`)
  })
  .catch(e => console.log(e))
