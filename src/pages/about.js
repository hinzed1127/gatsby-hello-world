import React from "react";
import { Link } from "gatsby";

export default () => (
  <div>
    <h1>Yo</h1>
    <p>My name's Dan</p>
    <Link to="/">Home</Link>
    <div>
      <a href="https://fayray.band" target="_blank" rel="noopener noreferrer">
        Check out dis band
      </a>
    </div>
  </div>
);