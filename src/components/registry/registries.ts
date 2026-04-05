export interface Registry {
	name: string;
	imageUrl: string;
	href: string;
}

export const registries: Registry[] = [
	{
		name: "Amazon",
		imageUrl: "https://picsum.photos/seed/registry-amazon/400/200",
		href: "#",
	},
	{
		name: "Westwing",
		imageUrl: "https://picsum.photos/seed/registry-westwing/400/200",
		href: "#",
	},
	{
		name: "IKEA",
		imageUrl: "https://picsum.photos/seed/registry-ikea/400/200",
		href: "#",
	},
];
