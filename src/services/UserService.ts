import { getCollection, type CollectionEntry } from "astro:content";

class UserService {
  static async getUsers(): Promise<CollectionEntry<"users">[]> {
    try {
      const users = await getCollection("users");
      return users;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching users");
    }
  }
}

export default UserService;
