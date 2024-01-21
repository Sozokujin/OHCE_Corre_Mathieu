import * as os from "os";
import {Salutation} from "../src/salutation";
import {LanguageFrench} from "../src/languageFrench";
import {VerifyPalindromeBuilder} from "./utilities/verifyPalindromeBuilder";
import {LanguageEnglish} from "../src/languageEnglish";
import {LanguageInterface} from "../src/language.interface";
import {LanguageFake} from "./utilities/languageFake";
import {TimeOfDay} from "../src/timeOfDay";

const palindrome = 'kayak';
const notPalindromes = ['test', 'gilet']
const timesOfDay = [
    TimeOfDay.Unknown,
    TimeOfDay.Morning,
    TimeOfDay.Afternoon,
    TimeOfDay.Evening,
    TimeOfDay.Night
];

describe("Vérifier si le message est un palindrome", () => {
    test.each([...notPalindromes])(
        "QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (message: string) => {
            let result = VerifyPalindromeBuilder.Default()
                .isPalindrome(message);

            let expectedValue = message.split('').reverse().join('');
            expect(result).toContain(expectedValue);
        });

    test.each([
        [new LanguageFrench(), Salutation.BIEN_DIT],
        [new LanguageEnglish(), Salutation.WELL_SAID],
    ])("ETANT DONNE un utilisateur parlant la %s " +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET '%s' est envoyé ensuite",
        (language: LanguageInterface, expectedValue: string) => {
            let verify = new VerifyPalindromeBuilder()
                .withLanguage(language)
                .Build();

            let result = verify.isPalindrome(palindrome);

            expect(result).toContain(palindrome + os.EOL + expectedValue);
        });

    function casesSalutations(){
        let messages = [...notPalindromes, palindrome];
        let cases: [TimeOfDay, string][]  = [];

        for (let timeOfDay of timesOfDay)
            for(let message of messages)
                cases.push([timeOfDay, message])

        return cases;
    }

    test.each(casesSalutations())(
        'ETANT DONNE un utilisateur parlant une langue ' +
        'ET que nous sommes le %s ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS les salutations de cette language à ce moment de la journée sont envoyées avant toute réponse',
        (timeOfDay: TimeOfDay, message: string) => {
            let languageFake = new LanguageFake();

            let verify =
                new VerifyPalindromeBuilder()
                    .withLanguage(languageFake)
                    .withTime(timeOfDay)
                    .Build();

            let result = verify.isPalindrome(message);

            let firstLine = result.split(os.EOL)[0];
            let expectedValue = languageFake.Greeting(timeOfDay);
            expect(firstLine).toEqual(expectedValue)
        });

    test.each([...notPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant français ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (message: string) => {
            const language = new LanguageFrench();
            let verify =
                new VerifyPalindromeBuilder()
                    .withLanguage(language)
                    .Build();

            let result = verify.isPalindrome(message);

            let lines = result.split(os.EOL);
            let lastLine = lines[lines.length - 1];
            expect(lastLine).toEqual(Salutation.AU_REVOIR)
        });

    test.each([...notPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant anglais ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Goodbye" est envoyé en dernier.',
        (message: string) => {
            const language = new LanguageEnglish();
            let verify =
                new VerifyPalindromeBuilder()
                    .withLanguage(language)
                    .Build();

            let result = verify.isPalindrome(message);

            let lines = result.split(os.EOL);
            let lastLine = lines[lines.length - 1];
            expect(lastLine).toEqual(Salutation.GOODBYE)
        });
});