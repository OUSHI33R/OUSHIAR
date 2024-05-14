import React from 'react';
import Home from './Page/Home';
import ConsentBanner from './components/ConsentBanner';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P38WCJQR4Y"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P38WCJQR4Y');
          `}
        </script>
      </Helmet>
      <Home />
      <ConsentBanner />
    </div>
  );
}

export default App;
