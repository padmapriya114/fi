const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});



const insertfi = (request, response) => {
const {id, accountid, accountnumber, wireroutingnumber, achroutingnumber, dwollafundingid, name, routingnumber, authtextid} = request.body
  pool.query( 'INSERT INTO cbanc.fi (id, accountid, accountnumber, wireroutingnumber, achroutingnumber, dwollafundingid, name, routingnumber, authtextid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[id, accountid, accountnumber, wireroutingnumber, achroutingnumber, dwollafundingid, name, routingnumber, authtextid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in fi')
  })
}


module.exports = {
insertfi
}
