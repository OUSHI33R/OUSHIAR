import React from 'react';
import Home from './Page/Home';
import ConsentBanner from './components/ConsentBanner';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-W2VNBTVZ'+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2VNBTVZ');
          `}
        </script>
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          {`
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W2VNBTVZ"
              height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
          `}
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </Helmet>
      <Home />
      <ConsentBanner />
    </div>
  );
}

export default App;
