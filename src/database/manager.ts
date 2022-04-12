import migrate from "./migrations";
import seed from "./seeds";

const commands = { migrate, seed };

for (const [key, value] of Object.entries(commands)) {
    if (key == process.argv[2]) {
        value();
    }
}
