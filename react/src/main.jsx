import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import NoExiste from './noexiste';
import './css/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoExiste />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
