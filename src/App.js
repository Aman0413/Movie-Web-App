import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetail/MovieDetail";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbId" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
