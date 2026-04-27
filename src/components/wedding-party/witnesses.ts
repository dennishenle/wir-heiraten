import agnes from "@/assets/agnes.jpg";
import robin from "@/assets/robin.jpg";

export type PartyMember = {
	name: string;
	description: string;
	image: ImageMetadata;
	alt: string;
};

export const bridesmaid: PartyMember = {
	name: "Agnes Eberhardt",
	description: "Beste Freundin seit der Schulzeit — hält die Nerven.",
	image: agnes,
	alt: "Porträt Agnes Eberhardt",
};

export const groomsman: PartyMember = {
	name: "Robin Henle",
	description: "Bruder — zuverlässig und Rückendeckung des Bräutigams.",
	image: robin,
	alt: "Porträt Robin Henle",
};
