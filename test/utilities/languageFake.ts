import {LanguageInterface} from "../../src/language.interface";

export class LanguageFake implements LanguageInterface {
    Congratulate(): string {
        return "Félicitations !";
    }
    Greeting(): string {
        return "Salut !";
    }
    Bye(): string {
        return "Bye bye !";
    }

}