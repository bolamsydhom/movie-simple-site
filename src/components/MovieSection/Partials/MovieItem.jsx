import React from 'react';

const movieItem = ({ description, title, rating, imageUrl }) => {
  function addToFavorite() {
    const movie = { overview: description, title, vote_average: rating, backdrop_path: imageUrl };
    let arrayofFavorites = JSON.parse(localStorage.getItem('results'));
    
    if (arrayofFavorites && !arrayofFavorites.result.find((item) => item.title === movie.title)) {
      arrayofFavorites.result.push(movie);
      localStorage.setItem('results', JSON.stringify(arrayofFavorites));
    } else if (!arrayofFavorites) {
      arrayofFavorites = { result: [] };
      arrayofFavorites.result.push(movie);
      localStorage.setItem('results', JSON.stringify(arrayofFavorites));
    }
    
  }
  return (
    <div className='card'>
      <div className='card__container'>
        <img src={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : 'assets/default.jpg'} alt='' />
      </div>
      <div className='card__rating'> {rating} </div>

      <div className='card__layer layer1'></div>
      <div className='card__layer layer2'></div>
      <div className='card__text'>
        <div>
          <h2 className='mb_3 pb_1'> {title} </h2>
          <p>{description.length > 200 ? description.substring(0, 200) + '...' : description}</p>
          <button className='btn mt_2' onClick={addToFavorite}>
            {' '}
            Add to Favorite{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default movieItem;
