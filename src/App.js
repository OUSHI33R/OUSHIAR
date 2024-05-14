import Home from "./Page/Home";
import ReactGA4 from 'react-ga4';


function App() {
  ReactGA4.init('G-5XYY30EH3Q'); // Initialize with your GA4 property ID
  ReactGA4.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <Home />
      <script type="text/javascript" src="https://app.termly.io/resource-blocker/5696ec9c-bd94-427c-9b4e-673bb11bc4d2?autoBlock=on"></script>
    </div>
  );
}

export default App;
