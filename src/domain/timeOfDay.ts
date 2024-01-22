export class TimeOfDay {
    private readonly _representation: string;

    public static Unknown: TimeOfDay = new TimeOfDay("Inconnu");
    public static Morning: TimeOfDay = new TimeOfDay("Matin");
    public static Afternoon: TimeOfDay = new TimeOfDay("Après-Midi");
    public static Evening: TimeOfDay = new TimeOfDay("Soirée");
    public static Night: TimeOfDay = new TimeOfDay("Nuit");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}