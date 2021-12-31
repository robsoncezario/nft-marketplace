import baseAPI from "../api";

export default class CollectibleService {
  static async upload({ file, name, description }) {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("name", name);
    formData.append("description", description);

    return await baseAPI.post("/collectibles/upload", formData, {
      "Content-Type": "multipart/form-data",
    });
  }
}
