import { LanguageFrench } from "../src/languageFrench";
import { Salutation } from "../src/salutation";
import { LanguageEnglish } from "../src/languageEnglish";
import { LanguageInterface } from "../src/language.interface";

describe("Vérification des langues", () => {
  test.each([
    [new LanguageFrench(), Salutation.BONJOUR],
    [new LanguageEnglish(), Salutation.HELLO],
  ])(
    "En %s on salue par '%s'",
    (language: LanguageInterface, expectedLanguage: string) => {
      expect(language.Greeting()).toBe(expectedLanguage);
    }
  );
});
