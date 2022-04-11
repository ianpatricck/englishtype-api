import client from '../';

async function up(): Promise<void> {
    await client.query(`CREATE TABLE IF NOT EXISTS english(id serial, text TEXT, PRIMARY KEY(id));`);
    console.log("english table was created");
}

async function down(): Promise<void> {
    await client.query(`DROP TABLE IF EXISTS english CASCADE;`);
    console.log("english table was dropped");
}

export { up, down };

