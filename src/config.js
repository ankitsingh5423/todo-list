import { Client, Databases, Account } from "appwrite";

const client = new Client();

client.setProject("67b4dbd8002ab8b8c03a");

const databases = new Databases(client);
const account = new Account(client);

export { databases, account };
