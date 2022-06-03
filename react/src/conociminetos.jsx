import React from 'react';
import './css/about.css';
import computadora from './img/ordenador.png';
import react from './img/react.png';
import eleventy from './img/11ty.png';
import flask from './img/flask.png';
import vite from './img/vite.png';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import jest from './img/jest.png';
import webpack from './img/webpack.png';
import npm from './img/npm.png';
import python from './img/python.png';
import java from './img/java.png';
import kotlin from './img/kotlin.png';
import ce from './img/ce.png';

export default function Conocimientos() {
  return (
    <>
      <h4 className="text-left">Front-End Frameworks:</h4>
      <div className="elemento">
        <div>
          <img alt="img" src={react} />
          <h5>React</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Back-End Frameworks:</h4>
      <div className="elemento">
        <div>
          <img alt="img" src={eleventy} />
          <h5>Eleventy</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" src={flask} />
          <h5>Flask</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Web Programming:</h4>
      <div className="elemento">
        <div>
          <img alt="img" className="npm" src={html} />
          <h5>HTML</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" className="npm" src={css} />
          <h5>CSS</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" className="npm" src={js} />
          <h5>JS</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Testing:</h4>
      <div className="elemento">
        <div>
          <img alt="img" src={jest} />
          <h5>jest</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Mobile & Dekstop:</h4>
      <div className="elemento">
        <div>
          <img alt="img" src={react} />
          <h5>React-Native</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Build Tools:</h4>
      <div className="elemento">
        <div>
          <img alt="img" src={webpack} />
          <h5>Webpack</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" src={vite} />
          <h5>Vite</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Monorepo Tools:</h4>
      <div className="elemento">
        <div>
          <img alt="img" className="npm" src={npm} />
          <h5>npm</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <h4 className="text-left">Non-JavaScript Languages</h4>
      <div className="elemento">
        <div>
          <img alt="img" src={python} />
          <h5>Python</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" src={java} />
          <h5>Java</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" src={kotlin} />
          <h5>Kotlin</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
      <div className="elemento">
        <div>
          <img alt="img" src={ce} />
          <h5>C / C++</h5>
        </div>
        <div>
          <img alt="computadora" src={computadora} />
          <img alt="computadora" src={computadora} />
        </div>
      </div>
    </>
  );
}
