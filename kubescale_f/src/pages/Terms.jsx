import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto px-10 py-20 relative z-10 text-neutral-700">
            <h1 className="text-4xl font-semibold mb-6">Terms of Service</h1>
            <div className="space-y-6 leading-relaxed">
                <p>
                    By accessing and using KubeScale, you agree to comply with and be bound by the following terms and conditions.
                </p>
                <h2 className="text-2xl font-medium mt-8 mb-4">Acceptable Use</h2>
                <p>
                    You agree to use the platform only for lawful purposes. You must not upload malicious payloads, 
                    mining scripts, or code intended to disrupt our infrastructure or the infrastructures of others.
                </p>
                <h2 className="text-2xl font-medium mt-8 mb-4">Service Availability</h2>
                <p>
                    While we strive for continuous uptime, KubeScale is provided on an "as-is" basis. 
                    We reserve the right to suspend or terminate container instances that violate our 
                    resource limits or terms of use without prior notice.
                </p>
                <h2 className="text-2xl font-medium mt-8 mb-4">Liability</h2>
                <p>
                    We are not liable for any data loss, service interruptions, or damages arising from the use 
                    of our platform. It is your responsibility to maintain backups of your source code and data.
                </p>
            </div>
        </div>
    );
};

export default Terms;