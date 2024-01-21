import * as os from "os";
import { Salutation } from "./salutation";

export class checkPalindrome {
    public static isPalindrome(message: string): string {
        let reverseMessage = message.toLocaleLowerCase().split('').reverse().join('');

        let result = Salutation.BONJOUR + os.EOL + reverseMessage + os.EOL;

        if(reverseMessage == message){
            result += Salutation.BIEN_DIT + os.EOL;
        }

        return result + Salutation.AU_REVOIR;
    }
}