import * as os from "os";
import { LanguageInterface } from "./language.interface";
import { TimeOfDay } from "./timeOfDay";

export class CheckPalindrome {
  private readonly _language: LanguageInterface;
  private readonly _timeOfDay: TimeOfDay;

  constructor(language: LanguageInterface, time: TimeOfDay) {
    this._language = language;
    this._timeOfDay = time;
  }

  public isPalindrome(message: string): string {
    let reverseMessage = message
      .toLocaleLowerCase()
      .split("")
      .reverse()
      .join("");

    let result =
      this._language.Greeting(this._timeOfDay) +
      os.EOL +
      reverseMessage +
      os.EOL;

    if (reverseMessage == message) {
      result += this._language.Congratulate() + os.EOL;
    }

    return result + this._language.Bye();
  }
}
