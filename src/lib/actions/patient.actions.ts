import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

//create a new user
export const createUser = async (user: CreateUserParams) => {
  try {
    const userID = ID.unique();
    const newUser = await users.create(
      userID,
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log({ newUser });
    return parseStringify(newUser);
  } catch (error: any) {
    console.log("error creating user: ", error);
    // check existing user
    if (error && error?.code == 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);
      return documents?.users[0];
    }
  }
};

//get a user from Appwrite
export const getUser = async (userID: string) => {
  try {
    const user = await users.get(userID);
    return parseStringify(user);
  } catch (error: any) {
    console.log("error fetching user: ", error);
  }
};
