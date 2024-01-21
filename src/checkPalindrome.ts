import * as os from "os";

export class checkPalindrome {
    public static isPalindrome(message: string): string {
        let reverseMessage = message.toLocaleLowerCase().split('').reverse().join('');

        if(reverseMessage == message){
            return reverseMessage + os.EOL + "Bien dit";  
        }

        return reverseMessage;
    }
}