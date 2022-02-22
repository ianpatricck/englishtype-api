import client from '../';

async function reset() {
    await client.connect();

    await client.query(`DROP TABLE IF EXISTS english CASCADE;`);
    await client.query(`DROP TABLE IF EXISTS portuguese CASCADE;`);

    await client.query(`
        CREATE TABLE english(
            id serial,
            text TEXT,

            PRIMARY KEY(id)
        );
    `);

    await client.query(`
        CREATE TABLE portuguese(
            id serial,
            text TEXT,
            en_id INT,

            PRIMARY KEY (id),
            FOREIGN KEY (en_id) REFERENCES english (id) ON DELETE CASCADE
        );
    `);


    await client.end();
}

reset();

