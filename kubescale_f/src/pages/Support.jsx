import React, { useState } from 'react';

const Support = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-3xl mx-auto px-10 py-20 relative z-10 text-neutral-700">
            <h1 className="text-4xl font-semibold mb-6">Contact Support</h1>
            <p className="mb-10 text-neutral-500">
                Experiencing deployment issues or have questions regarding KubeScale? Reach out here.
            </p>

            {submitted ? (
                <div className="p-6 bg-green-50 text-green-700 border border-green-200 rounded-xl">
                    <h3 className="font-semibold text-xl mb-2">Message Sent!</h3>
                    <p>Our support team will review your inquiry and get back to you within 24 hours.</p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-6 px-5 py-2 bg-green-600 active:bg-green-700 text-white rounded-lg transition"
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-neutral-600">Email Address</label>
                        <input 
                            required
                            type="email" 
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                            placeholder="you@company.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-neutral-600">Issue Summary</label>
                        <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                            placeholder="e.g. Docker build failing on Next.js deployment"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-neutral-600">Detailed Description</label>
                        <textarea 
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 min-h-[150px] resize-none"
                            placeholder="Paste your deployment logs or error messages here..."
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-900 transition-colors font-medium w-full md:w-auto"
                    >
                        Submit Ticket
                    </button>
                </form>
            )}
        </div>
    );
};

export default Support;