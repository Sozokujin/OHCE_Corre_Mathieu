import { LanguageInterface } from "../../src/domain/language.interface";
import { TimeOfDay } from "../../src/domain/timeOfDay";

export class LanguageFake implements LanguageInterface {
  Congratulate(): string {
    return "Félicitations !";
  }
  Greeting(time: TimeOfDay): string {
    return "Salut /" + time.toString();
  }
  Bye(): string {
    return "Bye bye !";
  }
}
