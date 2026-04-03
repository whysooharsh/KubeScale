import React from 'react';

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto px-10 py-20 relative z-10 text-neutral-700">
            <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
            <div className="space-y-6 leading-relaxed">
                <p>
                    At KubeScale, we prioritize your privacy and are committed to protecting your personal data.
                    This policy outlines how we collect, use, and safeguard the information you provide when using our platform.
                </p>
                <h2 className="text-2xl font-medium mt-8 mb-4">Information Collection</h2>
                <p>
                    We collect minimal personal data necessary to provide our deployment services. 
                    This may include repository metadata, email addresses for account management, 
                    and operational logs generated during deployment.
                </p>
                <h2 className="text-2xl font-medium mt-8 mb-4">Data Usage</h2>
                <p>
                    Your uploaded code and generated artifacts are used strictly for containerization 
                    and deployment scaling. We do not inspect, aggregate, or distribute your source code 
                    beyond the lifecycle required to build and host your applications.
                </p>
                <h2 className="text-2xl font-medium mt-8 mb-4">Data Protection</h2>
                <p>
                    We implement industry-standard security measures to prevent unauthorized access.
                    Temporary files and build artifacts are strictly pruned from our servers post-deployment.
                </p>
            </div>
        </div>
    );
};

export default Privacy;