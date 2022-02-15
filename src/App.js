import './App.css';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroesList from "./components/HeroesList";
import HeroesProvider from "./states/HeroesProvider";

function App() {
  return (
    <div>
      <HeroesProvider>
        <Navbar />

        <div className="container">
          <SearchBar placeholder="Rechercher par nom..." />
          <HeroesList />
        </div>
      </HeroesProvider>
    </div>
  );
}

export default App;
