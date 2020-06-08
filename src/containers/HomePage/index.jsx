import React, { useState, useEffect } from 'react';
import MovieSection from '../../components/MovieSection';
import { GetMoviesSection } from '../../axios-requests';

const HomePage = (props) => {
  const [currentTopRated, setTopRated] = useState([]);
  const [currentUpcoming, setUpcomig] = useState([]);
  const [currentPlaying, setPlaying] = useState([]);
  const [currentSearched, setSearched] = useState([]);
  const [currentfavouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setPlaying([]);
      setTopRated([]);
      setUpcomig([]);
      setSearched([]);

      switch (props.match.url) {
        case '/upcoming Movies':
          const upComingData = await GetMoviesSection('upcoming', 1);
          setUpcomig(upComingData);
          break;

        case '/Top Rated':
          const topData = await GetMoviesSection('top_rated', 1);
          setTopRated(topData);
          break;

        case '/Now Playing':
          const currentPlayingData = await GetMoviesSection('now_playing', 1);
          setPlaying(currentPlayingData);
          break;

        case '/favorites':
          const favoritesMovies = JSON.parse(localStorage.getItem('results'));
          setFavouriteMovies(favoritesMovies);
          break;

        case '/search':
          const searchedMovies = await GetMoviesSection('now_playing', 1, '', props.searchingQuery);
          setSearched(searchedMovies);
          break;

        case '/':
          const upComingDat = await GetMoviesSection('upcoming', 1, 3);
          const topDat = await GetMoviesSection('top_rated', 1, 3);
          const currentPlayingDat = await GetMoviesSection('now_playing', 1, 3);

          setPlaying(currentPlayingDat);
          setTopRated(topDat);
          setUpcomig(upComingDat);
          break;

        default:
          break;
      }
    }
    fetchData();
  }, [props.match.url, props.searchingQuery]);

  

  return (
    <React.Fragment>
      <div className='container'>
        {props.match.url === '/' ? (
          
          <React.Fragment>
            <MovieSection sectionType={'Top Rated'} moviList={currentTopRated} isHome={true} />
            <MovieSection sectionType={'upcoming Movies'} moviList={currentUpcoming} isHome={true} />
            <MovieSection sectionType={'Now Playing'} moviList={currentPlaying} isHome={true} />
          </React.Fragment>

        ) : props.match.url === '/Now Playing' ? (
          <MovieSection sectionType={'Now Playing'} moviList={currentPlaying} isHome={false} />
        ) : props.match.url === '/Top Rated' ? (
          <MovieSection sectionType={'Top Rated'} moviList={currentTopRated} isHome={false} />
        ) : props.match.url === '/upcoming Movies' ? (
          <MovieSection sectionType={'upcoming Movies'} moviList={currentUpcoming} isHome={false} />
        ) : props.match.url === '/favorites' ? (
          <MovieSection sectionType={'Favorites'} moviList={currentfavouriteMovies} isHome={false} />
        ) : props.match.url === '/search' ? (
          <MovieSection sectionType={'Search Result'} moviList={currentSearched} isHome={false} />
        ) : (
          <h1 className='pl_5 mt_5 ml_5'>
            {' '}
            Sorry!! We're working to provide this page soon <span></span>🙏{' '}
          </h1>
        )}
      </div>
    </React.Fragment>
  );
};
export default HomePage;
