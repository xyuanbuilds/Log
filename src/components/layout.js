import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';

const Layout = ({ aside, title, children }) => {
  return (
    <div className="wrapper">
      <header style={{ ...scale(2) }}>123</header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          minHeight: '100vh',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1>{title}</h1>
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
