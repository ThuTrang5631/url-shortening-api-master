import Header from "./components/Header";
import Banner from "./components/Banner";
import CardStatistic from "./components/CardStatistic";
import SubBanner from "./components/SubBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        {/* <CardStatistic /> */}
        <SubBanner />
      </main>
    </div>
  );
}

export default App;
