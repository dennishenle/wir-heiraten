export interface Registry {
	name: string;
	imageUrl: string;
	href: string;
	linkLabel: string;
}

export const registries: Registry[] = [
	{
		name: "Amazon",
		imageUrl: "https://picsum.photos/seed/registry-amazon/400/200",
		href: "#",
		linkLabel: "Auf zur Wunschliste"
	},
	{
		name: "Auf ein Wohl 💸",
		imageUrl: "https://picsum.photos/seed/registry-paypal/400/200",
		href: "#",
		linkLabel: "paypal.me"
	},
];
