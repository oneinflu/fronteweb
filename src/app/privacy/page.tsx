import React from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export const metadata = {
    title: 'Privacy Policy - INFLU',
    description: 'Privacy Policy for INFLU - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <Container>
            <Section 
                id="privacy-policy" 
                title="Privacy Policy"
                description="Learn how we collect, use, and protect your personal information."
            >
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg">
                        <p className="text-foreground-accent mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                        
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p className="text-foreground-accent mb-4">
                                Welcome to INFLU. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share your information when you use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                            <p className="text-foreground-accent mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc pl-6 text-foreground-accent mb-4">
                                <li>Contact information (name, email, phone number)</li>
                                <li>Profile information</li>
                                <li>Payment information</li>
                                <li>Communication preferences</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                            <p className="text-foreground-accent mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 text-foreground-accent mb-4">
                                <li>Provide and maintain our services</li>
                                <li>Process your transactions</li>
                                <li>Send you marketing communications (with your consent)</li>
                                <li>Improve our services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                            <p className="text-foreground-accent mb-4">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 text-foreground-accent mb-4">
                                <li>Service providers</li>
                                <li>Business partners</li>
                                <li>Legal authorities when required by law</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                            <p className="text-foreground-accent mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 text-foreground-accent mb-4">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                            <p className="text-foreground-accent">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                Email: partner@oneinflu.com
                                <br />
                                Phone: +91 (123) 456-7890
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </Container>
    );
}