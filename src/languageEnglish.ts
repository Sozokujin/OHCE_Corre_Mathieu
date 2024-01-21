import {LanguageInterface} from "./language.interface";
import {Salutation} from "./salutation";

export class LanguageEnglish implements LanguageInterface {
    public toString(): string {
        return "Langue : Anglais";
    }

    public Congratulate(): string {
        return Salutation.WELL_SAID;
    }

    public Greeting(): string {
        return Salutation.HELLO;
    }

    public Bye(): string {
        return Salutation.GOODBYE;
    }
}