import './App.css';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroesList from "./components/HeroesList";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <SearchBar placeholder="Rechercher par nom..." />
        <HeroesList />
      </div>
    </div>
  );
}

export default App;
