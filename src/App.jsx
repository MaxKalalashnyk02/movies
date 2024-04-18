import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";
import Favorite from "./components/Favorite";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResult";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/details" element={<MovieDetails />} />
          <Route path="/search" element={<SearchResults />} /> 
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
