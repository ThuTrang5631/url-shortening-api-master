import Header from "./components/Header";
import Banner from "./components/Banner";
import SubBanner from "./components/SubBanner";
import Footer from "./components/Footer";
import SearchSection from "./components/SearchSection";
import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const prevScrollPos = useRef<number>(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    const currentScrollPos = window.pageYOffset;

    // Button is displayed after scrolling for 500 pixels
    if (currentScrollPos > 300 && currentScrollPos > prevScrollPos.current) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

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
      {isVisible && (
        <Button className="btn__scrolltop" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </Button>
      )}
    </div>
  );
}

export default App;
