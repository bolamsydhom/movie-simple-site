import React from 'react';
import { Link } from 'react-router-dom';

import MovieItem from './MovieItem.jsx';

const MovieList = ({ list, total_pages, page, isHome ,url}) => (
  <div className='cards'>
    {list
      ? list.map((item) => {
          return <MovieItem title={item.title} description={item.overview} rating={item.vote_average} imageUrl={item.backdrop_path} key={item.title} />;
        })
      : []}
    {isHome ? (
      <div className='card'>
        <div className='card__container'>
          <img src='assets/See More.png' alt='' />
        </div>

        <div className='card__layer layer1'></div>
        <div className='card__layer layer2'></div>
        <div className='card__text'>
          <div>
            <h1 className='mb_3 pb_1'>
              <Link to={`/${url}`}>
                See More <i className='fa fa-angle-double-right' aria-hidden='true'></i>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    ) : (
      // <div className='paggination mt_5'>
      //   {[...Array(total_pages)].map((x, number) => {
      //     if (number < 5) {
      //       return (
      //         <Link key={number} className={number + 1 === page ? 'active' : ''} to=''>
      //           {number + 1}
      //         </Link>

      //         // total_pages > 5 ? <Link href=''>&raquo;</Link> : ''
      //       );
      //     } else if (total_pages > 5 && number == 6) return <Link to={`/${url}/${number}`} href=''>&raquo;</Link>;
      //     return '';
      //   })}
      //   {/* <a href=''>&laquo;</a>
     
      // <a href=''>&raquo;</a> */}
      // </div>
    <div></div>
    )}
  </div>
);
export default MovieList;
