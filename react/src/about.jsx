import React from 'react';
import './css/about.css';
import foto from './img/foto-perfil.jpg';

export default function About() {
  return (
    <main className="body-principal-about">
      <div className="foto-perfil">
        <img alt="foto" src={foto} />
      </div>
      <div className="info">
        <h1>José Mariano Reyes Hernández</h1>
        <h4>20 años</h4>
        <p>Estudiante de 3er Año en la Universidad del Valle de Guatemala</p>
      </div>
    </main>
  );
}
