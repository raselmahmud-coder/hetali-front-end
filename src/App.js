import AboutUs from "./components/aboutUs/AboutUs";
import NavBar from "./components/header/NavBar";
import "./App.css"
function App() {
  return (
    <div className="app-max-width">
      <NavBar />
      <AboutUs />
    </div>
  );
}

export default App;
