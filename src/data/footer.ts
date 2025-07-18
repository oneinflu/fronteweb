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
            url: "#privacy-policy"
        },
        {
            text: "Terms & Conditions",
            url: "#terms-conditions"
        },
        {
            text: "Cookie Policy",
            url: "#cookie-policy"
        }
    ],
    email: 'partner@oneinflu.com',
    telephone: '+91 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}