export interface Registry {
	name: string;
	imageUrl: string;
	href: string;
	linkLabel: string;
	description?: string;
}

export const registries: Registry[] = [
	{
		name: "Unsere Wunschliste",
		imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		href: "https://docs.google.com/spreadsheets/d/1rRxKaS2ktHGC189P-PXODuNGIgWcLfRPzUho3fbVZKA/edit?usp=sharing",
		linkLabel: "Liste ansehen",
		description: "Unter dem Link findet ihr eine Liste mit ein paar Geschenkinspirationen."
	},
	{
		name: "Geldgeschenke 💌",
		imageUrl: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		href: "#",
		linkLabel: "",
		description: "Über einen kleinen Beitrag in Form eines Geldgeschenks freuen wir uns sehr – damit erfüllen wir uns gemeinsame Erlebnisse und Reisen."
	},
];
