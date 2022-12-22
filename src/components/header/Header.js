import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import Logo from "./images/graduate.png"

export default function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
            {/* <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className='header_icon' /></Link> */}
            <Link to="/"><img src={Logo} className='header_icon' /></Link>
            <Link to="/movies/popular"><span>Popular</span></Link>
            <Link to="/movies/top_rated"><span>Top rated</span></Link>
            <Link to="/movies/upcoming"><span>Upcoming</span></Link>
        </div>
    </div>
  )
}
