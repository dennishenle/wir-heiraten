export interface Registry {
	name: string;
	imageUrl: string;
	href: string;
	linkLabel: string;
	description?: string;
}

export const registries: Registry[] = [
	{
		name: "Amazon",
		imageUrl: "https://picsum.photos/seed/registry-amazon/400/200",
		href: `${import.meta.env.BASE_URL}/wishlist`,
		linkLabel: "Auf zur Wunschliste"
	},
	{
		name: "Geldgeschenke 💌",
		imageUrl: "https://picsum.photos/seed/registry-cash/400/200",
		href: "#",
		linkLabel: "",
		description: "Über einen kleinen Beitrag in Form eines Geldgeschenks freuen wir uns sehr – damit erfüllen wir uns gemeinsame Erlebnisse und Reisen."
	},
];
