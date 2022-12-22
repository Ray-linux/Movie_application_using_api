import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Movieslist from "./components/moviesList/Movieslist";
import Movie from "./pages/movieDetail/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<Movieslist/>}></Route>
          <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
