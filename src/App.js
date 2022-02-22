import './App.css';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroesList from "./components/HeroesList";
import {Provider} from "react-redux";
import store from "./states/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <div className="container">
          <SearchBar placeholder="Rechercher par nom..." />
          <HeroesList />
        </div>
      </Provider>
    </div>
  );
}

export default App;
