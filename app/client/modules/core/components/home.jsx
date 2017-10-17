import React from 'react';
import {Link} from 'react-router';

const Home = () => (
  <div>
    <div id="header">
      <h1 id="page-title">Learn Chinese</h1>
    </div>
    <div id="content">
      <p>
        Welcome! Please select a lesson:
      </p>

      <Link className="btn-link" to="fundamentals">FUNDAMENTALS</Link>
      <Link className="btn-link" to="mandarin">BASIC MANDARIN</Link>
      <Link className="btn-link" to="tones">TONES</Link>
      <Link className="btn-link" to="stroke">STROKE</Link>

    </div>
  </div>
);

export default Home;
