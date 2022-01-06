import baseAPI from "../api";

export default class AuthService {
  static async getNounce() {
    return await baseAPI.get("/auth/nonce");
  }
}
