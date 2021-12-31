import baseAPI from "../api";

export default class MarketService {
  static async getList(text, page, rows) {
    return baseAPI.get("/market", {
      params: {
        page,
        rows,
        title_like: text,
      },
    });
  }
}
