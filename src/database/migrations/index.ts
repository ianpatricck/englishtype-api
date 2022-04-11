import { up as englishTableUp, down as englishTableDown } from "./EnglishTableMigration";
import { up as portugueseTableUp, down as portugueseTableDown } from "./PortugueseTableMigration";

async function migrate(): Promise<void> {
    await englishTableDown();
    await portugueseTableDown();

    await englishTableUp();
    await portugueseTableUp();
}

export default migrate;
