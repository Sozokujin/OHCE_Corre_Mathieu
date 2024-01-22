import { CheckPalindrome } from "../../src/domain/checkPalindrome";
import { LanguageFrench } from "../../src/domain/languageFrench";
import { LanguageInterface } from "../../src/domain/language.interface";
import { TimeOfDay } from "../../src/domain/timeOfDay";

export class VerifyPalindromeBuilder {
  private _language: LanguageInterface = new LanguageFrench();
  private _time: TimeOfDay = TimeOfDay.Unknown;

  public static Default() {
    return new VerifyPalindromeBuilder().Build();
  }

  public Build(): CheckPalindrome {
    return new CheckPalindrome(this._language, this._time);
  }

  public withLanguage(language: LanguageInterface): VerifyPalindromeBuilder {
    this._language = language;
    return this;
  }

  public withTime(time: TimeOfDay) {
    this._time = time;
    return this;
  }
}
