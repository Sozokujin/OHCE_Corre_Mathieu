import { LanguageInterface } from "./language.interface";
import { Salutation } from "./salutation";
import { TimeOfDay } from "./timeOfDay";

export class LanguageEnglish implements LanguageInterface {
  public toString(): string {
    return "Langue : Anglais";
  }

  public Congratulate(): string {
    return Salutation.WELL_SAID;
  }

  public Greeting(time: TimeOfDay): string {
    if (time == TimeOfDay.Morning) return Salutation.GOOD_MORNING;

    if (time == TimeOfDay.Afternoon) return Salutation.GOOD_AFTERNOON;

    if (time == TimeOfDay.Evening) return Salutation.GOOD_EVENING;

    if (time == TimeOfDay.Night) return Salutation.GOOD_NIGHT;

    return Salutation.HELLO;
  }

  public Bye(): string {
    return Salutation.GOODBYE;
  }
}
