import client from '../';
import allTexts from './texts';

client.connect();

allTexts.map((content) => {
    client.query(`INSERT INTO english(text) VALUES ('${content.en}');`);
});

allTexts.map((content) => {
    client.query(`INSERT INTO portuguese(text, en_id) VALUES ('${content.pt}', ${content.en_id});`);
});

setTimeout(() => {
    client.end();
}, 5000);
