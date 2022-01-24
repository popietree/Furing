import classes from './Header.module.css';
import logo from '../assets/img/furingT.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt='A logo with f and p character ' class='logo' />{' '}
          <span>富 榮 印 務 </span>
          <span> Furing Printing</span>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to='/' activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='services' activeClassName={classes.active}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to='contact' activeClassName={classes.active}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
