import { up as EnglishTableUp, down as EnglishTableDown } from "./EnglishTableMigration";
import { up as PortugueseTableUp, down as PortugueseTableDown } from "./PortugueseTableMigration";

async function migrate(): Promise<void> {
    console.log("migrate");

    // ..
}

export default migrate;
