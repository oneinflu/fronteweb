import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName} and who can use it? Is  secure?`,
        answer: 'INFLU is Bharat Ka Engine – a single platform for influencers, businesses, and users. You can book influencers, create a store, sell products, launch your channel, or collaborate for campaigns — all in one app.',
    },
    {
        question: `How much commission does ${siteDetails.siteName} charge?`,
        answer: 'Zero commission for life in Phase 1! Stores and influencers keep 100% of their earnings. We believe in empowering creators and businesses first.',
    },
    {
        question: 'Can influencers and businesses connect directly?',
        answer: `Yes! INFLU enables direct chat and collaboration between influencers and brands. No middlemen, no delays — just pure growth.`
    },
    {
        question: 'What makes INFLU different from other platforms like Instagram or Zomato?',
        answer: 'Unlike other apps, INFLU is not just social media or just food delivery. It’s a super-app for influencers, local businesses, stores, and content creators — all-in-one with built-in monetization and 0% commission.',
    },
    {
        question: 'How secure is INFLU for transactions?',
        answer: 'We use bank-grade encryption, biometric login, and real-time fraud detection to keep your deals and data safe. Plus, every influencer and business is verified by INFLU.'
    }
];