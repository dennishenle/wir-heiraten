export interface ScheduleStep {
	time: string;
	title: string;
	description: string;
}

export const schedule: ScheduleStep[] = [
	{
		time: "15:30",
		title: "Empfang der Gäste",
		description:
			"Ankunft und Begrüßung beim Bleichestadel.",
	},
	{
		time: "16:00",
		title: "Freie Trauung",
		description:
			"Die feierliche Zeremonie unter freiem Himmel — bitte nehmt rechtzeitig Platz.",
	},
	{
		time: "17:00",
		title: "Sektempfang & Gratulation",
		description:
			"Stoßt mit uns an und genießt kleine Häppchen, während wir Fotos machen.",
	},
	{
		time: "18:30",
		title: "Dinner & Aktivitäten",
		description:
			"Live Grilling, Desserts und Torte — lasst es euch schmecken!",
	},
	{
		time: "21:00",
		title: "Eröffnungstanz",
		description:
			"Unser erster Tanz als Ehepaar — danach seid ihr alle auf der Tanzfläche willkommen.",
	},
	{
		time: "21:00",
		title: "Party, Party, Party - 'til we drop",
		description:
			"Gute Musik und kalte Getränke erwarten euch.",
	},
];
