import { LanguageStub } from "./languageStub";

export class LanguageSpy extends LanguageStub {
  private _greetConsulted: boolean = false;

  public Greet(): string {
    this._greetConsulted = true;
    return super.Greeting();
  }

  public GreetHasBeenConsulted() {
    return this._greetConsulted;
  }
}
