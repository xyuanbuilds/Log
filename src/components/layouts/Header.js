import React from 'react';
import { Link } from 'gatsby';
import { LocationProvider } from '@reach/router';
import { rhythm } from '@/utils/typography';
import './Header.css';

const Header = ({ location }) => {
  const { pathname = '/' } = location;
  return (
    <header
      style={{
        paddingLeft: `${rhythm(3 / 4)}`,
        paddingRight: `${rhythm(3 / 4)}`,
      }}
      id="m-header"
    >
      <div id="m-index">
        <Link to="/" state={{ previous: pathname }}>
          Meditation
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link>Minds</Link>
          </li>
          <li>
            <a href="mailto:1076849402@qq.com">Email</a>
          </li>
          <li>
            <Link href="https://github.com/JhonXY">Github</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default (props) => (
  <LocationProvider>
    {({ location }) => <Header {...props} location={location} />}
  </LocationProvider>
);
