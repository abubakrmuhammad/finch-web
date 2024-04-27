import db from "~/db";
import { users } from "~/db/schema";

class UsersRepository {
  async createUser() {
    db.insert(users).values({
      email: "test",
      password: "test",
      role: "super_admin",
    });
  }
}

export default new UsersRepository();
