import React from 'react';
import MovieList from './Partials/MovieList';

const movieSection = ({ sectionType, moviList, isHome }) => {
  return (
    <section id={sectionType}>
      <div className='section mt_5 mb_3'>
        <h2 className='section__header'> {sectionType} </h2>
      </div>
      <MovieList list={moviList.result} url={sectionType} total_pages={moviList.total_pages} page={moviList.page} isHome={isHome} />
    </section>
  );
};

export default movieSection;
