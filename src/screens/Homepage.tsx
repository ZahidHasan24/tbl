import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import TradingFeature from "../components/TradingFeature";
import ChallengeFeature from "../components/ChallengeFeature";
import Ticker from "../components/Ticker";
import Footer from "../components/Footer";
import menuItems from "../constants/menu";
import { tickerData } from "../constants/mock";

function Homepage() {
  return (
    <div>
      <Navbar menuItems={menuItems} />
      <Banner />
      <Ticker tickers={tickerData} />
      <TradingFeature />
      <ChallengeFeature />
      <Footer />
    </div>
  );
}

export default Homepage;
