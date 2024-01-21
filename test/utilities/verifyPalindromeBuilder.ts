import {CheckPalindrome} from "../../src/checkPalindrome";
import {LanguageFrench} from "../../src/languageFrench";
import {LanguageInterface} from "../../src/language.interface";

export class VerifyPalindromeBuilder {
    private _language: LanguageInterface = new LanguageFrench();

    public static Default() {
        return new VerifyPalindromeBuilder().Build();
    }

    public Build(): CheckPalindrome{
        return new CheckPalindrome(this._language);
    }

    public withLanguage(language: LanguageInterface): VerifyPalindromeBuilder {
        this._language = language;
        return this;
    }
}