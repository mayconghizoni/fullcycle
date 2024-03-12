const express = require('express');
const mysql = require('mysql');
const crypto = require('crypto');

const app = express();
const port = 3000;

const config = {
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);

async function createPerson() {
  const randomString = crypto.randomBytes(8).toString('hex');
  const sql = `INSERT INTO people (name) VALUES ('${randomString}')`;
  await query(sql);
}

async function listPeople() {
  const sql = `SELECT * FROM people`;
  const result = await query(sql);
  return result;
}

async function query(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

app.get('/', async (req, res) => {
  try {
    await createPerson();
    const people = await listPeople();

    let listHtml = '<ul>';
    for (const person of people) {
      listHtml += `<li>${person.id} - ${person.name}</li>`;
    }
    listHtml += '</ul>';

    const html = '<h1>Full Cycle Rocks!</h1>' + listHtml;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log('Aplicação rodando na porta ' + port);
});