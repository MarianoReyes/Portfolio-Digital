/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './css/contact.css';
import gmail from './img/gmail.png';
import linkedin from './img/linkedin.png';
import facebook from './img/facebook.png';
import github from './img/github.png';
import instagram from './img/instagram.png';

export default function Contact() {
  return (
    <main className="body-principal-contact">
      <h1>Contáctame en los siguientes espacios</h1>
      <div className="redes">
        <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=josemarianoreyesh02@gmail.com">
          <img className="img-singular" alt="gmail" src={gmail} />
          <h6>Gmail</h6>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jos%C3%A9-mariano-reyes-hern%C3%A1ndez-74541519b/">
          <img className="img-singular" alt="linkedin" src={linkedin} />
          <h6>Linkedin</h6>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/MarianoReyes">
          <img className="img-singular" alt="github" src={github} />
          <h6>Github</h6>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mariano.reyeshernandez.7">
          <img className="img-singular" alt="facebook" src={facebook} />
          <h6>Facebook</h6>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jmreyesh02/">
          <img className="img-singular" alt="instagram" src={instagram} />
          <h6>Instagram</h6>
        </a>
      </div>
    </main>
  );
}
