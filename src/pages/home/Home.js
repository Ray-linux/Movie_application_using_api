import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom'

import "./home.css";
import MovieList from "../../components/moviesList/Movieslist";

export default function Home() {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=24965395d5e31845621545ef94211a51"
    )
      .then((res) => res.json())
      .then((data) => setpopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
            {
                popularMovies.map(movie => (
                    <>
                    <Link to={`/movie/${movie.id}`}>
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                    </div>
                    <div className="posterImage_overlay">
                            <div className="posterImage_title">
                            { movie ? movie.original_title: " "}
                            </div>
                            <div className="posterImage_runtime">
                                {movie ? movie.release_date: "   "}
                            <span className="posterImage_reting">
                                {movie ? movie.vote_average : "  "}
                                <i className="fas fa-star"/>{" "}
                            </span>
                            </div>
                            <div className="posterImage_description">
                                {movie ? movie.overview: " "}
                            </div>
                    </div>
                    </Link>
                    </>
                ))
            }

        </Carousel>
        <MovieList/>
      </div>
    </>
  );
}
