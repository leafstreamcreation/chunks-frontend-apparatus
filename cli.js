import axios from "axios";
import "dotenv/config";

// cli commands for the boiler
//use axios
//parse a command below and execute:


// What does operation look like? a series of create, update, delete commands until push is requested

async function requestToServiceWorker(args) {
    const instance = axios.create({
        baseURL: `http://localhost:${process.env.PORT}`,
    });

    const instr = args[0];

    if (instr === "create") {
        // create: adds a new activity to the boiler - val: {id, hist, name, group}
        console.log(instr);
    }
    else if (instr === "update") {
        // update: adds a new update to the boiler - id, val: {hist, name}
        console.log(instr);

    }
    else if (instr === "delete") {
        // delete: adds a new delete to the boiler - id
        console.log(instr);

    }
    else if (instr === "index") {
        // index: lists the user's activities
        console.log(instr);
        const res = await instance.get("/");
        console.log("res: ", res.status, res.data);
    }
    else if (instr === "push") {
        // push: print the current boiler state and then reset
        console.log(instr);
    }
    else console.log("POOP");
}

requestToServiceWorker(process.argv.slice(2));

