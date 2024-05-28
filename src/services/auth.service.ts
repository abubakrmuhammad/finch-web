import type { usersTable } from "~/db/schema";
import userRepository from "~/repositories/user.repository";

class AuthService {
  async signUp(user: typeof usersTable.$inferInsert) {
    const newUser = await userRepository.createUser(user);

    const { password, ...newUserWithoutPassword } = newUser;

    return newUserWithoutPassword;
  }

  async login(userInfo: { email: string; password: string }) {
    const { email, password } = userInfo;

    const user = await userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    if (userInfo.password !== password) {
      throw new Error("Incorrect password");
    }

    const { password: _, ...userWithoutPassword } = userInfo;

    return userWithoutPassword;
  }
}

export default new AuthService();
