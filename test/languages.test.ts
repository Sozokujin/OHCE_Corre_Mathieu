import { LanguageFrench } from "../src/domain/languageFrench";
import { Salutation } from "../src/domain/salutation";
import { LanguageEnglish } from "../src/domain/languageEnglish";
import { LanguageInterface } from "../src/domain/language.interface";
import { TimeOfDay } from "../src/domain/timeOfDay";

describe("Vérification des langues", () => {
  test.each([
    [new LanguageFrench(), TimeOfDay.Unknown, Salutation.BONJOUR],
    [new LanguageFrench(), TimeOfDay.Morning, Salutation.BONJOUR],
    [new LanguageFrench(), TimeOfDay.Afternoon, Salutation.BONJOUR],
    [new LanguageFrench(), TimeOfDay.Evening, Salutation.BONSOIR],
    [new LanguageFrench(), TimeOfDay.Night, Salutation.BONSOIR],
    [new LanguageEnglish(), TimeOfDay.Unknown, Salutation.HELLO],
    [new LanguageEnglish(), TimeOfDay.Morning, Salutation.GOOD_MORNING],
    [new LanguageEnglish(), TimeOfDay.Afternoon, Salutation.GOOD_AFTERNOON],
    [new LanguageEnglish(), TimeOfDay.Evening, Salutation.GOOD_EVENING],
    [new LanguageEnglish(), TimeOfDay.Night, Salutation.GOOD_NIGHT],
  ])(
    "En %s on salue le %s par '%s'",
    (language: LanguageInterface, time: TimeOfDay, expectedMoment: string) => {
      expect(language.Greeting(time)).toBe(expectedMoment);
    }
  );
});
