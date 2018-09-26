import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Yo</h1>
    <p>My name's Dan</p>
    <Link to="/">Home</Link>
    <div>
      <a href="https://fayray.band" target="_blank" rel="noopener noreferrer">
        Check out dis band
      </a>
    </div>
  </Layout>
);