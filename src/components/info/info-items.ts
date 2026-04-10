export interface InfoItem {
	emoji: string;
	title: string;
	description: string;
	/** Optional external link (e.g. Google Maps). */
	url?: string;
}

export const infoItems: InfoItem[] = [
	{
		emoji: "👔",
		title: "Dresscode",
		description: "Festlich elegant — helle, sommerliche Farben sind willkommen.",
	},

	{
		emoji: "🅿️",
		title: "Parken",
		description: "Kostenlose Parkplätze stehen direkt an der Location zur Verfügung.",
		url: "https://maps.app.goo.gl/LMohNXFJSZu7Jq9j7",
	},
	{
		emoji: "☀️",
		title: "Wetter",
		description:
			"Die Feier findet teils draußen statt — denkt an Sonnenschutz!",
	},
	{
		emoji: "💑",
		title: "Begleitung",
		description:
			"Plus-Ones sind herzlich willkommen — bitte gebt bei eurer Zusage Bescheid.",
	},
	{
		emoji: "📸",
		title: "Fotografie",
		description:
			"Wir haben einen Fotografen — genießt den Moment und legt das Handy beiseite.",
	},
	{
		emoji: "🎁",
		title: "Geschenke",
		description:
			"Eure Anwesenheit ist das größte Geschenk. Mehr dazu in der Geschenke-Sektion.",
	},
	{
		emoji: "👶",
		title: "Kinder willkommen",
		description:
			"Kinder sind herzlich eingeladen — ein kleiner Spielbereich ist vorhanden.",
	},
	{
		emoji: "🥗",
		title: "Ernährung",
		description:
			"Bitte teilt uns Allergien oder Unverträglichkeiten vorab mit.",
	},
	{
		emoji: "🍸️",
		title: "Lasst es euch gut gehen",
		description:
			"It's a celebration... Sloppy drunk will be tolerated 😂 - Yvonne",
	},
];
