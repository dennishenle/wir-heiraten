import ravensburgPhoto from "@/assets/ravensburg.jpg";
import bleichestadelPhoto from "@/assets/bleichestadel.jpg";

export interface DetailItem {
    icon: "calendar" | "clock" | "pin" | "hourglass" | "music";
    text: string;
}

export const ceremony = {
    image: ravensburgPhoto,
    alt: "Rathaus Ravensburg",
    title: "Standesamt",
    items: [
        { icon: "calendar" as const, text: "Freitag, 21. August 2026" },
        { icon: "clock" as const, text: "11:00 Uhr" },
        {
            icon: "pin" as const,
            text: "Marienpl. 26, 88212 Ravensburg",
        },
        { icon: "hourglass" as const, text: "ca. 90 Minuten" },
    ],
    directionsUrl: "https://maps.app.goo.gl/HXq8DvmUcE6eKpir7",
};

export const reception = {
    image: bleichestadelPhoto,
    alt: "Festsaal für die Feier",
    title: "Feier",
    items: [
        { icon: "calendar" as const, text: "Samstag, 29. August 2026" },
        { icon: "clock" as const, text: "15:30 Uhr" },
        {
            icon: "pin" as const,
            text: "Ob. Bleiche 1, 89423 Gundelfingen an der Donau",
        },
        { icon: "music" as const, text: "DJ" }, // TODO: Name vom DJ eintragen
    ],
    directionsUrl: "https://maps.app.goo.gl/8BaTxjR92YDfQPuA6",
};