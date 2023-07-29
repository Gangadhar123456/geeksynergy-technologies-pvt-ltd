import React from 'react';
import './index.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';

const MovieItem = ({ movie }) => {
  const { _id, title, stars,language , poster, genre,director , runTime,releasedDate, pageViews,totalVoted} = movie;
  const starsList = stars[0].split(',').slice(0, 2);
  const milliseconds = releasedDate * 1000;
  const date = new Date(milliseconds);
  const month = date.toLocaleString('default', { month: 'long' }); // Returns full month name (e.g., "February")
  const day = date.getDate();
  const formattedDate = `${day} ${month}`;

return (
    <div className='ItemContainerMain'>
    <li key={_id}>
        
    <div className='leftContainer'>
      <AiFillCaretUp/>
      <h1>1</h1>
      <AiFillCaretDown/>
      </div>
    <div>
        <img src={poster} alt={title} />
    </div>
    <div className='ItemContainer'>
        <h1>Title: {title}</h1>
        <p>genre: {genre}</p>
        <p>Director: {director}</p>
        <p>Starring: {starsList.join(', ')}</p>
        <p>{runTime}min | {language} | {formattedDate}</p>
        <p className='forColore'>{pageViews} views | Voted by {totalVoted} people </p>
      </div>  
      </li>
      <button className='watchTrainerButton'>Watch Trailer</button>
    </div>
  );
};

export default MovieItem;
