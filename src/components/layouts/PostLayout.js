import React, { useEffect } from 'react';
import Header from './Header';
import Brief from './Brief';
// import { rhythm } from '../utils/typography';s
import './PostLayout.css';

const Layout = ({ aside, title, children }) => {
  useEffect(() => {
    if (window && window.document) {
      window.document.body.setAttribute('class', 'light');
    }
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <main id="m-mind">
        <h1>{title}</h1>
        <Brief />
        <article>{children}</article>
      </main>
      <aside>{aside}</aside>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
