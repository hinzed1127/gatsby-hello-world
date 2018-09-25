import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
    <>
        <Header text="Yooooooo" />
        <Header text="This is my website" />
        <div>
            <Link to="/about/">About</Link>
        </div>
        <div>
            <Link to="/dogs/">Dogs</Link>
        </div>
        <div style={{color: 'purple', fontSize: '72px'}}>Hello MPLS!</div>
        <div style={{ color: 'blue', fontSize: '36px' }}>(Also, Hello world.)</div>
        <img src="https://source.unsplash.com/random/800x400" alt="something random" />
    </>
);