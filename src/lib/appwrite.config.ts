import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("668aae0b0013bee5e9a4")
  .setKey(
    "9e72c0a3b87234ae7c25655b1fbcd1be7b093daa469754d9ac36128f3f73f4dfaa42f455caa5469d38ca6c35baaefe6f893ce0285c171cdee2fadf2350c3de46ab5c1e47a3515b8237090fcc6d3857e4909c5f946ae3e83c0e8f13090b0d216a1ae25b97702452ff1300d7317333eda1fc6b3a4fe6e1daf50014554104cff019"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
