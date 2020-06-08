import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,

} from 'react-router-dom';
const app =( < BrowserRouter > < App /> </BrowserRouter> );

ReactDOM.render( app , document.getElementById('root'));




let toogle = false;
document.getElementById('toggler').addEventListener('click', () => {
    if (!toogle) {
        document.querySelector('.toggle').style.display = 'block'
        setTimeout(() => {
            document.getElementById('nav').style.clipPath = 'circle(75%)'
            toogle = true

        }, 0.5);
    } else {
        document.getElementById('nav').style.clipPath = 'circle(0% at 5% -90px)'
        toogle = false
        setTimeout(() => {
            document.querySelector('.toggle').style.display = 'none'

        }, 900);

    }

})
document.getElementById('tooglerUl').addEventListener('click', () => {
    document.getElementById('nav').style.clipPath = 'circle(0% at 5% -90px)'
    toogle = false
    setTimeout(() => {
        document.querySelector('.toggle').style.display = 'none'

    }, 900);
})
