import client from '../';

async function up(): Promise<void> {
    await client.query(`CREATE TABLE IF NOT EXISTS portuguese(id serial, text TEXT, en_id INT, PRIMARY KEY (id), FOREIGN KEY (en_id) REFERENCES english (id) ON DELETE CASCADE);`);
    console.log("portuguese table was created");
}

async function down(): Promise<void> {
    await client.query(`DROP TABLE IF EXISTS portuguese CASCADE;`);
    console.log("portuguese table was dropped");
}

export { up, down };
