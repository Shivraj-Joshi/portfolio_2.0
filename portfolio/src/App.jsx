import Hero from "./Components/Hero";
import Feats from "./Components/Feats";

function App() {
  return (
    <>
      <div className="main-container bg-black md:flex h-full w-full p-4">
        <Hero />
        <Feats />
      </div>
    </>
  );
}

export default App;
