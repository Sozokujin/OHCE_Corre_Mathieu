import {LanguageInterface} from "./language.interface";
import {Salutation} from "./salutation";
import { TimeOfDay } from "./timeOfDay";

export class LanguageFrench implements LanguageInterface {
    public toString(): string {
        return "Langue : Français";
    }

    public Congratulate(): string {
        return Salutation.BIEN_DIT;
    }

    public Greeting(time: TimeOfDay): string {
        if(time == TimeOfDay.Evening || time == TimeOfDay.Night)
            return Salutation.BONSOIR;
        return Salutation.BONJOUR;
    }

    public Bye(): string {
        return Salutation.AU_REVOIR;
    }

}