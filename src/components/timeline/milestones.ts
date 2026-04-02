import rubihornPhoto from "@/assets/rubihorn.jpeg";
import ulmPhoto from "@/assets/ulm.jpeg";
import backereiPhoto from "@/assets/baeckerei.jpeg";
import kinoPhoto from "@/assets/kino.jpeg";

export interface Milestone {
    date: string;
    title: string;
    text: string;
    image: ImageMetadata;
}

export const milestones: Milestone[] = [
    {
        date: "Herbst 2018",
        title: "Das erste Treffen",
        text: "Ein zufälliger Besuch im Netto — eigentlich nur wegen einer Quarktasche — wurde zum Anfang von allem. Statt Gebäck gab es ein Lächeln, das alles veränderte.",
        image: backereiPhoto,
    },
    {
        date: "Herbst 2018",
        title: "Das erste Date",
        text: "Wenige Tage später ging es zusammen ins Kino — unser erstes richtiges Date. Was als aufgeregtes Kennenlernen begann, fühlte sich schnell an, als würden wir uns schon ewig kennen.",
        image: kinoPhoto,
    },
    {
        date: "Sommer 2022",
        title: "Zusammengezogen",
        text: "Endlich unter einem Dach! Wir bauten uns das erste Nest im schönen Tuttlingen. Es war chaotisch, wunderbar und der Beginn eines neuen Kapitels für uns beide.",
        image: ulmPhoto,
    },
    {
        date: "Sommer 2025",
        title: "Der Antrag",
        text: "Auf dem Gipfel des Rubihorns, nach einem steilen Aufstieg und mit der schönsten Aussicht, kam die Frage aller Fragen. Die Antwort stand von Anfang an fest.",
        image: rubihornPhoto,
    },
];
