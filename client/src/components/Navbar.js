import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from '../components/AutoComplete';

//import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { icon, title } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <AutoComplete hero={props.hero} />
        </li>
        {/* <li>
          <div>Home</div>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <div>About</div>
          <Link to='/about'>About</Link>
        </li> */}
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Hero Academia',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
