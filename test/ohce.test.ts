import * as os from "os";
import {checkPalindrome} from "../src/checkPalindrome";
import {Salutation} from "../src/salutation";

const palindrome = 'kayak';
const notPalindromes = ['test', 'gilet']

describe("Vérifier si le message est un palindrome", () => {
   test.each([...notPalindromes])("QUAND on saisit un non-palindrome ALORS elle est renvoyée en miroir",
       (message : string) => {
          let result = checkPalindrome.isPalindrome(message);
          let resultPalindrome = message.split('').reverse().join('');
          expect(result).toContain(resultPalindrome);
   });

   test("QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET 'Bien dit' est envoyé", () =>{
      let result = checkPalindrome.isPalindrome(palindrome);
      expect(result).toContain(palindrome + os.EOL + Salutation.BIEN_DIT);
   });

   test.each([...notPalindromes, palindrome])('QUAND on saisit une message ALORS "Bonjour" est envoyé avant toute réponse',
    (message: string) => {
       let result = checkPalindrome.isPalindrome(message);
       let firstLine = result.split(os.EOL)[0];
       expect(firstLine).toEqual(Salutation.BONJOUR)
   });

    test.each([...notPalindromes, palindrome])('QUAND on saisit une message ALORS "Au revoir" est envoyé en dernier.',
    (message: string) => {
       let result = checkPalindrome.isPalindrome(message);
       let lines = result.split(os.EOL);
       let lastLine = lines[lines.length - 1];
       expect(lastLine).toEqual(Salutation.AU_REVOIR)
   });
});