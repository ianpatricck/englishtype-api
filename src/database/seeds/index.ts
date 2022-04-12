import data from "../data.json";
import client from "../";

export default function seed(): void {
    
    data.map(text => {
        if (Object.entries(text).length !== 0) {
            client.query(`INSERT INTO english(text) VALUES ('${text.en}');`);
            client.query(`INSERT INTO portuguese(text, en_id) VALUES ('${text.pt}', '${text.en_id}');`);
        }
    });

    console.log("Seeding...");
    console.log("Finished \n");

}
