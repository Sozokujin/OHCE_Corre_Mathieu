import * as os from "os";
import { checkPalindrome } from "../src/checkPalindrome";

describe("Vérifier si le message est un palindrome", () => {
   test.each([
       ['test'],
       ['gilet']
   ])("QUAND on saisit un non-palindrome ALORS elle est renvoyée en miroir",
       (message: string) => {
          let result = checkPalindrome.isPalindrome(message);
          let resultPalindrome = message.split('').reverse().join('');
          expect(result).toEqual(resultPalindrome);
       })

   test("QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET 'Bien dit' est envoyé ensuite", () =>{
      const palindrome = "kayak";
      let result = checkPalindrome.isPalindrome(palindrome);
      expect(result).toEqual(palindrome + os.EOL + "Bien dit");
   })
});