import React from 'react';
import './css/about.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import curriculum from './assets/CurriculumVitaeJoseMarianoReyes.pdf';
import foto from './img/foto-perfil.jpg';
import twitch from './img/proyecto_twitch.png';
import calculadora from './img/proyecto_calculadora.png';
import laberinto from './img/proyecto_laberinto.png';
import memoria from './img/proyecto_memoria.png';
import bubble from './img/proyecto_bubble.png';

export default function About() {
  return (
    <main className="body-principal-about-max">
      <div className="body-principal-about">
        <div className="foto-perfil">
          <img alt="foto" src={foto} />
        </div>
        <div className="info">
          <h1>José Mariano Reyes Hernández</h1>
          <h4>20 años</h4>
        </div>
      </div>
      <div className="body-principal-about">
        <div className="more-text">
          <p>
            Soy un estudiante en la Universidad del Valle de Guatemala en la carrera de
            Ingeniería en Ciencias de la Computación y Tecnologías de la Información.

          </p>
          <br />
          <p>
            Actualmente me encuentro en tercer año de la carrera y lo mostrado en esta página son
            son algunos de mis proyectos realizados.

          </p>
          <br />
          <p>Si deseas leer más sobre mí puedes consultar el siguiente enlace:</p>
          <br />
          <a href={curriculum} download="CV Jose Reyes" className="boton-download">Descargar CV</a>
        </div>
      </div>
      <div className="container-port">
        <h1 className="white">Preview de Proyectos</h1>
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
    </main>
  );
}
