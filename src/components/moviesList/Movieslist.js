import React, {useEffect, useState} from "react"
import "./movieslist.css"
import { useParams } from "react-router-dom"
import Card from "../cards/Card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=24965395d5e31845621545ef94211a51&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList