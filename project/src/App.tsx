import "./App.css";
import { Carrousel } from "./view/Carrousel/Carrousel";
import { Home } from "./view/Home/Home";
import { Info } from "./view/Info/Info";

function App() {
  return (
    <>
      <Home />
      <div className="w-full flex flex-col lg:flex-row">
        <Carrousel />
        <Info />
      </div>
    </>
  );
}

export default App;
