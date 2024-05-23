import type { usersTable } from "~/db/schema";
import userRepository from "~/repositories/user.repository";

class AuthService {
  async signUp(user: typeof usersTable.$inferInsert) {
    const newUser = await userRepository.createUser(user);

    const { password, ...newUserWithoutPassword } = newUser;

    return newUserWithoutPassword;
  }
}

export default new AuthService();
