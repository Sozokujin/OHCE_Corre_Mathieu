import {LanguageInterface} from "../../src/language.interface";
import { TimeOfDay } from "../../src/timeOfDay";

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