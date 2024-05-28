import { eq } from "drizzle-orm";
import db from "~/db";
import { usersTable } from "~/db/schema";

class UsersRepository {
  async createUser(user: typeof usersTable.$inferInsert) {
    const newUser = await db.insert(usersTable).values(user).returning();

    return newUser[0];
  }

  async getUserByEmail(email: string) {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1)
      .execute();

    return user[0];
  }
}

export default new UsersRepository();
