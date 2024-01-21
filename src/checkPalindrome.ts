import * as os from "os";
import { LanguageInterface } from "./language.interface";

export class CheckPalindrome {
    private readonly _language: LanguageInterface;

    constructor(language: LanguageInterface) {
        this._language = language;
    }

    public isPalindrome(message: string): string {
        let reverseMessage = message.toLocaleLowerCase().split('').reverse().join('');

        let result = this._language.Greeting() + os.EOL + reverseMessage + os.EOL;

        if(reverseMessage == message){
            result += this._language.Congratulate() + os.EOL;
        }

        return result + this._language.Bye();
    }
}