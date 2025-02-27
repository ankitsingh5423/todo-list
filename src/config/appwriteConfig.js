import { Client, Account } from "appwrite";

const Client = new Client();

client.setProject("67be0a900017f97060c9");

export const account = new Account(client);
