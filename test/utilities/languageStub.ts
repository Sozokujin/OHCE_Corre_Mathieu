import { LanguageInterface } from "../../src/domain/language.interface";

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
