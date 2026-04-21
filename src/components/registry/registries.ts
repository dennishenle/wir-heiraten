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
		href: `${import.meta.env.BASE_URL}wishlist`,
		linkLabel: "Auf zur Wunschliste"
	},
	{
		name: "Geldgeschenke 💌",
		imageUrl: "https://picsum.photos/seed/registry-cash/400/200",
		href: "#",
		linkLabel: "",
		description: "Der größte Wunsch ist, diesen Tag mit euch zu feiern! Wer uns darüber hinaus eine Freude machen möchte, darf gerne zur Hochzeit ein Geldgeschenk mitbringen."
	},
];
