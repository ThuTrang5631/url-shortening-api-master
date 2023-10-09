import Header from "./components/Header";
import Banner from "./components/Banner";
import CardStatistic from "./components/CardStatistic";
import SubBanner from "./components/SubBanner";
import Footer from "./components/Footer";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        {/* <CardStatistic /> */}
        <SearchSection />
        <SubBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
