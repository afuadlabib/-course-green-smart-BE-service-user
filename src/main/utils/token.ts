import JsonWebToken from "jsonwebtoken";
import AppContext from "../config/appContext";

export default class Token {
  public static createToken(payload: object): string {
    return JsonWebToken.sign({ ...payload }, AppContext.Screat);
  }

  public static compareToken(token: string) {
    return JsonWebToken.verify(token, AppContext.Screat);
  }
}
