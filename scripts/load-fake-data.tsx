import { Client } from "pg";
import { loadEnvConfig} from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default async function loadFakeData(numUsers: number = 10) {
    console.log(`Executing load fake data. Generatint ${numUsers} users.`);
   
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT!),
    });

    await client.connect();

    const res = await client.query("select 1");
    console.log(res)
    await client.end();
}

loadFakeData();