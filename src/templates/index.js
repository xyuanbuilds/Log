import React from 'react';
import { Link } from 'gatsby';

const Index = ({ pageContext: allPages }) => {
  return (
    <div>
      <ul>
        {allPages.map((page) => {
          <li key={page.name}>
            <Link to={page.name}>{page.name}</Link>
          </li>;
        })}
      </ul>
      <Link to="/">back</Link>
    </div>
  );
};

export default Index;
