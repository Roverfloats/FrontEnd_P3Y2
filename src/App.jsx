import Header from "./components/Header";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch("https://data.buienradar.nl/2.0/feed/json")
      .then((response) => response.json())
      .then(json => {
        setStations(json);
      });
  }, []);

  const addFavorite = (station) => {
    const exists = favorites.find(favorite => favorite.$id === station.$id);
    if (exists) {
      setFavorites(favorites.filter(fav => fav !== station));
    }
    else{
      setFavorites([...favorites, station]);
    }
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage favoriteList={favorites} stationList={stations} addFavorite={addFavorite}/>}/>
          <Route path="InfoPage" element={<InfoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;