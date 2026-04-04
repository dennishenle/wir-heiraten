export type PartyMember = {
	name: string;
	description: string;
	image: string;
	alt: string;
};

export const bridesmaid: PartyMember = {
	name: "Agnes Eberhardt",
	description: "Beste Freundin seit der Schulzeit — hält die Nerven.",
	image:
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop&crop=faces",
	alt: "Porträt Agnes Eberhardt",
};

export const groomsman: PartyMember = {
	name: "Robin Henle",
	description: "Bruder — zuverlässig und Rückendeckung des Bräutigams.",
	image:
		"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=faces",
	alt: "Porträt Robin Henle",
};
