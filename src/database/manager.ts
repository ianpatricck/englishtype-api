import migrate from "./migrations";

const commands = {
    migrate: migrate
};

Object.entries(commands).forEach(([key, value]) => {
    if (process.argv[2] == key) {
        value();
    } else {
        throw new Error(`${process.argv[2]} command not found`);
    }
});

