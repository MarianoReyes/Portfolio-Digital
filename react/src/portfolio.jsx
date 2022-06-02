/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './css/portfolio.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import twitch from './img/proyecto_twitch.png';
import calculadora from './img/proyecto_calculadora.png';
import laberinto from './img/proyecto_laberinto.png';
import memoria from './img/proyecto_memoria.png';
import bubble from './img/proyecto_bubble.png';

export default function Portfolio() {
  return (
    <main className="body-principal-portfolio">
      <div className="container-port">
        <Carousel autoPlay="true" interval="10000" infiniteLoop="true">
          <div className="elemento-carrusel">
            <img alt="foto" src={twitch} />
            <p className="legend">Copia de Twitch con css y React</p>
          </div>
          <div className="elemento-carrusel">
            <img alt="foto" src={bubble} />
            <p className="legend">Copia de Netflix</p>
          </div>
          <div>
            <img alt="foto" src={calculadora} />
            <p className="legend">Calculadora funcional en React y vite</p>
          </div>
          <div>
            <img alt="foto" src={laberinto} />
            <p className="legend">Laberinto con React</p>
          </div>
          <div>
            <img alt="foto" src={memoria} />
            <p className="legend">Memoria con React</p>
          </div>
        </Carousel>
      </div>
      <div className="center"><h1>Descripcion Detallada de cada Proyecto</h1></div>
      <div className="container-list">
        <div className="elemento-list">
          <img alt="twitch" src={twitch} />
          <div className="texto">
            <h2>Copia de Twitch</h2>
            <div className="tags">
              <p className="tag">React</p>
              <p className="tag">Webpack</p>
              <p className="tag">Eslint</p>
            </div>
            <p>Copia front-end realizada con css para simular el sitio de streaming de videos Twitch.</p>
            <a href="https://github.com/MarianoReyes/CopiaTwitchCss" target="_blank" rel="noreferrer">Ver aquí</a>
          </div>
        </div>
        <div className="elemento-list">
          <img alt="bubble" src={bubble} />
          <div className="texto">
            <h2>Copia de Twitch</h2>
            <div className="tags">
              <p className="tag">Python</p>
              <p className="tag">PostgreSQL</p>
              <p className="tag">AWS RDB</p>
              <p className="tag">Html</p>
            </div>
            <p>Copia front-end y back-end de Netflix con base de datos alojada en AWS, api para consumo de datos y página visual.</p>
            <a href="https://github.com/MarianoReyes/CopiaTwitchCss" target="_blank" rel="noreferrer">Ver aquí</a>
          </div>
        </div>
        <div className="elemento-list">
          <img alt="twitch" src={calculadora} />
          <div className="texto">
            <h2>Calculadora Funcional</h2>
            <div className="tags">
              <p className="tag">React</p>
              <p className="tag">Vite</p>
              <p className="tag">Jest</p>
              <p className="tag">Eslint</p>
            </div>
            <p>Calculadora capaz de realizar operaciones básicas con manejos de errores.</p>
            <a href="https://github.com/MarianoReyes/Calculadora_React_Tests" target="_blank" rel="noreferrer">Ver aquí</a>
          </div>
        </div>
        <div className="elemento-list">
          <img alt="twitch" src={laberinto} />
          <div className="texto">
            <h2>Laberinto con fetch</h2>
            <div className="tags">
              <p className="tag">React</p>
              <p className="tag">Webpack</p>
              <p className="tag">Eslint</p>
              <p className="tag">Fetch</p>
            </div>
            <p>Laberinto generado a partir de un fetch de elementos con React.</p>
            <a href="https://github.com/MarianoReyes/Laberinto_Webpack_React" target="_blank" rel="noreferrer">Ver aquí</a>
          </div>
        </div>
        <div className="elemento-list">
          <img alt="twitch" src={memoria} />
          <div className="texto">
            <h2>Memoria</h2>
            <div className="tags">
              <p className="tag">React</p>
              <p className="tag">Html</p>
              <p className="tag">Css</p>
            </div>
            <p>Juego de Memoria con react a nivel básico.</p>
            <a href="https://github.com/MarianoReyes/Memory_React" target="_blank" rel="noreferrer">Ver aquí</a>
          </div>
        </div>
      </div>

    </main>
  );
}
