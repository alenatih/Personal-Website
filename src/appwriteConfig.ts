import { Client, Databases, Account } from "appwrite"

// Import type models for Appwrite
// import { type Models } from "appwrite"

export const client: Client = new Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66a2d9bb002ea27689fd') // My project ID

export const account: Account = new Account(client)
export const database: Databases = new Databases(client)

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createEmailPasswordSession(email, password)
