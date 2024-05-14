import React, { useEffect, useState } from 'react';
import './ConsentBanner.css'; // Import your CSS file

const ConsentBanner = () => {
    const [consentGiven, setConsentGiven] = useState(localStorage.getItem('consentGiven') === 'true');

    // Function to set Google Analytics consent
    const setGaConsent = (consent) => {
        window['ga-disable-G-P38WCJQR4Y'] = !consent; // Replace 'G-5XYY30EH3Q' with your GA4 property ID
    };

    useEffect(() => {
        if (consentGiven) {
            setGaConsent(true); // Enable Google Analytics
        }
    }, [consentGiven]);

    const handleAcceptAll = () => {
        setConsentGiven(true); // Save consent
        localStorage.setItem('consentGiven', 'true');
    };

    const handleRejectAll = () => {
        setConsentGiven(false); // Save consent
        localStorage.setItem('consentGiven', 'false');
    };

    return (
        !consentGiven && (
            <div className="consent-banner">
                <div className="consent-text">
                    We use cookies to ensure you get the best experience on our website. By clicking "Accept All", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                </div>
                <div className="consent-buttons">
                    <button onClick={handleAcceptAll}>Accept All</button>
                    <button onClick={handleRejectAll}>Reject All</button>
                </div>
            </div>
        )
    );
};

export default ConsentBanner;
