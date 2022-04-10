import client from '../';

async function up() {
    await client.connect();

    await client.query(`CREATE TABLE english(id serial, text TEXT, PRIMARY KEY(id));`);
    await client.end();
}

async function down() {
    await client.query(`DROP TABLE IF EXISTS english CASCADE;`);
    await client.end();
}

