import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import MovieItem from '../MovieItem';
import './index.css';


const MovieList = ({onLogout}) => {
  const [movies, setMovies] = useState([]);
  const [companyInfoVisible, setCompanyInfoVisible] = useState(false);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = () => {
    const url = 'https://hoblist.com/api/movieList';
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    };

    fetch(url, params)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.result);
        console.log(data.result)
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  const handleCompanyInfoClick = () => {
    setCompanyInfoVisible((prevVisible) => !prevVisible);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <>
    <h2 className='header'>Movie List</h2>
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} /> 
      ))}
    </ul>
    <button className='infobutton' onClick={handleCompanyInfoClick}>Company Info</button>
    <button className='infobutton' onClick={handleLogout}>Logout</button>
    {companyInfoVisible && <Footer />}
  </>

  );
};

export default MovieList;



