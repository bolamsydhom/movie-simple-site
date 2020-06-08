import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searching }) => {

  

  // let searchQuery=React.createRef();
  // const searchHandler = (e) => {
  //     console.log(e.target.value);
  //     console.log(searchQuery);
  //     // searchQuery = e.target.value;
  //     return (e.target.value);
  // }

  // const clickHandler = () =>{
  //     // console.log(props);
  //     props.searching(searchQuery.current.value);
  //     // props.history.push(`/search/${searchQuery.current.value}`);
  //     console.log(searchQuery.current.value);

  // }
  return (
    <React.Fragment>
      <div className='nav-bar'>
        <div className='nav-bar__toggle__icon' id='toggler'>
          <i className='fa fa-align-left' aria-hidden='true'></i>
        </div>

        <div className='nav-bar__Home'>
          <h1>
            <Link to='/'>Movie Home</Link>
          </h1>
        </div>

        <div className='nav-bar__search'>
          <input
            type='text'
            name='search'
            id='search'
            onChange={(event) => searching(event)}
            placeholder='Search'
            // ref={searchQuery}
          />
          {/* {console.log(searchQuery)} */}
          <Link to={`/search`} className='nav-bar__search__btn btn'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </Link>

          {/* <button onClick={(event) => searching(event)} className='nav-bar__search__btn btn'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </button> */}
        </div>
      </div>

      <div className='toggle'>
        <div className='toggle__wrapper'>
          <nav id='nav'>
            <ul id='tooglerUl'>
              <li className='toogle__wrapper__item'>
                <i className='fa fa-pie-chart' aria-hidden='true'>
                  {' '}
                </i>
                <Link to='/Top Rated'> Top Movies </Link>
              </li>
              <li className='toogle__wrapper__item'>
                {' '}
                <i className='fa fa-arrow-circle-right' aria-hidden='true'></i> <Link to='/upcoming Movies'> Upcoming Movies </Link>
              </li>
              <li className='toogle__wrapper__item'>
                {' '}
                <i className='fa fa-play-circle' aria-hidden='true'></i> <Link to='/Now Playing'> Now Playing </Link>
              </li>
              <li className='toogle__wrapper__item'>
                {' '}
                <i className='fa fa-star' aria-hidden='true'></i> <Link to='favorites'> Favourites </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;