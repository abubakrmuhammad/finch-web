import db from "~/db";
import { usersTable } from "~/db/schema";

class UsersRepository {
  async createUser(user: typeof usersTable.$inferInsert) {
    const newUser = await db.insert(usersTable).values(user).returning();

    return newUser[0];
  }
}

export default new UsersRepository();
