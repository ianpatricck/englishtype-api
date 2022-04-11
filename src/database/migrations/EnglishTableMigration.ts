import client from '../';

async function up(): Promise<void> {
    await client.connect();
    await client.query(`CREATE TABLE english(id serial, text TEXT, PRIMARY KEY(id));`);
    await client.end();
}

async function down(): Promise<void> {
    await client.connect();
    await client.query(`DROP TABLE IF EXISTS english CASCADE;`);
    await client.end();
}

export { up, down };

