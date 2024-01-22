import { TimeOfDay } from "./timeOfDay";
export interface LanguageInterface {
  Congratulate(): string;

  Greeting(time: TimeOfDay): string;

  Bye(): string;
}
