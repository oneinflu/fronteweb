import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Bharat Ka Engine – Powering creators and businesses together.",
    quickLinks: [
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Terms & Conditions",
            url: "/terms"
        },
        {
            text: "Cookie Policy",
            url: "/privacy#cookies"
        }
    ],
    email: 'partner@oneinflu.com',
    telephone: '+91 (123) 456-7890',
    socials: {
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}