import {LanguageInterface} from "./language.interface";
import {Salutation} from "./salutation";

export class LanguageFrench implements LanguageInterface {
    public toString(): string {
        return "Langue : Français";
    }

    public Congratulate(): string {
        return Salutation.BIEN_DIT;
    }

    public Greeting(): string {
        return Salutation.BONJOUR;
    }

    public Bye(): string {
        return Salutation.AU_REVOIR;
    }

}