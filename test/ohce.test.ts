import * as os from "os";
import { Salutation } from "../src/salutation";
import { LanguageFrench } from "../src/languageFrench";
import { VerifyPalindromeBuilder } from "./utilities/verifyPalindromeBuilder";
import { LanguageEnglish } from "../src/languageEnglish";
import { LanguageInterface } from "../src/language.interface";
import { LanguageFake } from "./utilities/languageFake";

const palindrome = "kayak";
const notPalindromes = ["test", "gilet"];

describe("Vérifier si le message est un palindrome", () => {
  test.each([...notPalindromes])(
    "QUAND on saisit un non-palindrome %s " +
      "ALORS elle est renvoyée en miroir",
    (message: string) => {
      let result = VerifyPalindromeBuilder.Default().isPalindrome(message);

      let resultPalindrome = message.split("").reverse().join("");
      expect(result).toContain(resultPalindrome);
    }
  );

  test.each([
    [new LanguageFrench(), Salutation.BIEN_DIT],
    [new LanguageEnglish(), Salutation.WELL_SAID],
  ])(
    "ETANT DONNE un utilisateur parlant la %s " +
      "QUAND on saisit un palindrome " +
      "ALORS celui-ci est renvoyé " +
      "ET '%s' est envoyé ensuite",
    (langue: LanguageInterface, resultPalindrome: string) => {
      let checker = new VerifyPalindromeBuilder().withLanguage(langue).Build();

      let result = checker.isPalindrome(palindrome);

      expect(result).toContain(palindrome + os.EOL + resultPalindrome);
    }
  );

  test.each([...notPalindromes, palindrome])(
    "ETANT DONNE un utilisateur parlant français " +
      "QUAND on saisit une chaîne %s " +
      'ALORS "Bonjour" est envoyé avant toute réponse',
    (message: string) => {
      const langue = new LanguageFrench();
      let checker = new VerifyPalindromeBuilder().withLanguage(langue).Build();

      let result = checker.isPalindrome(message);

      let firstLine = result.split(os.EOL)[0];
      expect(firstLine).toEqual(Salutation.BONJOUR);
    }
  );

  test.each([...notPalindromes, palindrome])(
    "ETANT DONNE un utilisateur parlant anglais " +
      "QUAND on saisit une chaîne %s " +
      'ALORS "Hello" est envoyé avant toute réponse',
    (message: string) => {
      const langue = new LanguageEnglish();
      let checker = new VerifyPalindromeBuilder().withLanguage(langue).Build();

      let result = checker.isPalindrome(message);

      let firstLine = result.split(os.EOL)[0];
      expect(firstLine).toEqual(Salutation.HELLO);
    }
  );

  test.each([...notPalindromes, palindrome])(
    "ETANT DONNE un utilisateur parlant français " +
      "QUAND on saisit une chaîne %s " +
      'ALORS "Au revoir" est envoyé en dernier.',
    (message: string) => {
      const langue = new LanguageFrench();
      let checker = new VerifyPalindromeBuilder().withLanguage(langue).Build();

      let result = checker.isPalindrome(message);

      let lines = result.split(os.EOL);
      let lastLine = lines[lines.length - 1];
      expect(lastLine).toEqual(Salutation.AU_REVOIR);
    }
  );

  test.each([...notPalindromes, palindrome])(
    "ETANT DONNE un utilisateur parlant anglais " +
      "QUAND on saisit une chaîne %s " +
      'ALORS "Goodbye" est envoyé en dernier.',
    (message: string) => {
      const langue = new LanguageEnglish();
      let checker = new VerifyPalindromeBuilder().withLanguage(langue).Build();

      let result = checker.isPalindrome(message);

      let lines = result.split(os.EOL);
      let lastLine = lines[lines.length - 1];
      expect(lastLine).toEqual(Salutation.GOODBYE);
    }
  );

  test.each([...notPalindromes, palindrome])(
    "ETANT DONNE un utilisateur parlant %s " +
      "QUAND on saisit une chaîne %s " +
      "ALORS les salutations de cette langue sont envoyées avant toute réponse",
    (message: string) => {
      let languageFake = new LanguageFake();

      let verify = new VerifyPalindromeBuilder()
        .withLanguage(languageFake)
        .Build();

      let result = verify.isPalindrome(message);

      let firstLine = result.split(os.EOL)[0];
      expect(firstLine).toEqual(languageFake.Greeting());
    }
  );
});
