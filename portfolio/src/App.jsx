import Hero from "./Components/Hero";
import Feats from "./Components/Feats";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="main-container bg-[#060606] md:flex h-full w-full p-4">
        <Hero />
        <Feats />
      </div>
      <Footer />
    </>
  );
}

export default App;
