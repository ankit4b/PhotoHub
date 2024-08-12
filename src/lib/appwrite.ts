import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66b878a6003c756ade1b'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
