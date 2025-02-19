import { Client, Databases } from "appwrite";

const client = new Client();

client.setProject("67b4dbd8002ab8b8c03a");

const databses = new Databases(client);

export { databses };
