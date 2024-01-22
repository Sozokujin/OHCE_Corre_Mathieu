import { LanguageInterface } from "../../src/language.interface";

export class LanguageStub implements LanguageInterface {
  Congratulate(): string {
    return "";
  }
  Greeting(): string {
    return "";
  }
  Bye(): string {
    return "";
  }
}
