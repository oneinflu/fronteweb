import React from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export const metadata = {
    title: 'Terms and Conditions - INFLU',
    description: 'Terms and Conditions for using INFLU services.',
};

export default function Terms() {
    return (
        <Container>
            <Section id={''} title={'Terms and Conditions'} description={''}>
                <div className="max-w-4xl mx-auto py-12">
                    <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
                    <div className="prose prose-lg">
                        <p className="text-foreground-accent mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-foreground-accent mb-4">
                                By accessing and using INFLU&apos;s services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
                            <p className="text-foreground-accent mb-4">
                                You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:
                            </p>
                            <ul className="list-disc pl-6 text-foreground-accent mb-4">
                                <li>Violating any applicable laws or regulations</li>
                                <li>Infringing on intellectual property rights</li>
                                <li>Transmitting harmful code or materials</li>
                                <li>Impersonating others</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
                            <p className="text-foreground-accent mb-4">
                                To access certain features of our services, you may need to create an account. You agree to:
                            </p>
                            <ul className="list-disc pl-6 text-foreground-accent mb-4">
                                <li>Provide accurate information</li>
                                <li>Maintain the security of your account</li>
                                <li>Notify us of any unauthorized access</li>
                                <li>Be responsible for all activities under your account</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                            <p className="text-foreground-accent mb-4">
                                All content, features, and functionality of our services are owned by INFLU and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                            <p className="text-foreground-accent mb-4">
                                INFLU shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
                            <p className="text-foreground-accent mb-4">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
                            <p className="text-foreground-accent">
                                For questions about these Terms, please contact us at:
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