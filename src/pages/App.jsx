import Testimony from "../components/App/Testimony";
import Facility from "../components/App/Facility";
import Price from "../components/App/Price";
import Footer from "../components/App/Footer";
import Hero from "../components/App/Hero";
import Navbar from "../components/App/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Price />
        <Facility />
        <Testimony />
      </main>
      <Footer />
    </>
  );
}

export default App;
