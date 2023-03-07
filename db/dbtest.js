// ℹ️ package responsible to make the connection with postgreSQL
// https://node-postgres.com/

const getDataDB = async () => {

  const { Client } = require("pg");
  // Data Base Credentials
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,

  });
  
  await client.connect();

  const res = await client.query(
    'SELECT * FROM "public"."charge_point_reading" LIMIT 1000'
  );
debugger;
  const result = res.rows;  

  await client.end();

  return result;
};

getDataDB().then((result)=> {console.log(result)});
