import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Header from './header';

const Layout = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 0 1rem;
`

export default ({ children }) => (
  <Layout>
    <Header text="Yooooooo" />
    <Header text="This is my website layout header" />
    {typeof window !== `undefined` && window.location.href !== "http://localhost:8000/" &&
      <Link to="/">Go back home</Link>
    }
    {children}
  </Layout>
);