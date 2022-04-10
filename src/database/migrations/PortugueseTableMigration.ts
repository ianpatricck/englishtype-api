import client from '../';

async function up() {
    await client.connect();

    await client.query(`CREATE TABLE portuguese(id serial, text TEXT, en_id INT, PRIMARY KEY (id), FOREIGN KEY (en_id) REFERENCES english (id) ON DELETE CASCADE);`);
    await client.end();
}

async function down() {
    await client.query(`DROP TABLE IF EXISTS portuguese CASCADE;`);
    await client.end();
}

