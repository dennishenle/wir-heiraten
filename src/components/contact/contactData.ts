interface ContactCard { 
    title: string,
    name: string,
    email: string,
    note: string,
    phone: string | null,
}

export const contactCards: ContactCard[] = [
    {
        title: "Das Brautpaar",
        name: "Svenja & Dennis",
        email: "henledennis@gmail.com",
        note: "Wir freuen uns auf eure Nachricht!",
        phone: "Whatsapp & Signal"
    },
];

interface FooterSocialLink { 
    label: string, 
    href: string,
    icon: string
}

export const socialLinks: FooterSocialLink[] = [];
