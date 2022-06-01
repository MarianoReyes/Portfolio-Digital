import React from 'react';
import './css/portfolio.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import twitch from './img/proyecto_twitch.png';
import calculadora from './img/proyecto_calculadora.png';
import laberinto from './img/proyecto_laberinto.png';
import memoria from './img/proyecto_memoria.png';

export default function Portfolio() {
  return (
    <main className="body-principal-portfolio">
      <Carousel autoPlay="true" interval="10000" infiniteLoop="true">
        <div className="elemento-carrusel">
          <img alt="foto" src={twitch} />
          <div> </div>
        </div>
        <div>
          <img alt="foto" src={calculadora} />
        </div>
        <div>
          <img alt="foto" src={laberinto} />
        </div>
        <div>
          <img alt="foto" src={memoria} />
        </div>
      </Carousel>
    </main>
  );
}
