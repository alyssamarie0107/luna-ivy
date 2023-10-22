import styles from './Navbar.module.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LunaIvyLogo from '../../assets/logo/lunaivy-transparent.png';
import SocialBtns from '../buttons/social-btns/SocialBtns';

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id={ styles.customNavbar  }>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      <Navbar.Collapse className={ styles.customNavbarCollapse } id="responsive-navbar-nav">
        <Nav id={ styles.customNav }>
          <div>
            <Nav.Link className={ styles.customLink } href="#home">home</Nav.Link>
            <Nav.Link className={ styles.customLink } href="#shows">shows</Nav.Link>
            <Nav.Link className={ styles.customLink } href="#videos">videos</Nav.Link>
          </div>

          <Navbar.Brand href="#home" id={ styles.NavBrand }>
              <img
              src={ LunaIvyLogo }
              alt="Luna Ivy logo"
              />
          </Navbar.Brand>

          <div>
            <Nav.Link className={ styles.customLink } href="#music">music</Nav.Link>
            <Nav.Link className={ styles.customLink } href="#contact">contact</Nav.Link>
            <SocialBtns />
          </div>
        </Nav>
      </Navbar.Collapse>
      
      <Navbar.Brand href="#home" id={ styles.NavBrand2 }>
          <img
          src={ LunaIvyLogo }
          alt="Luna Ivy logo2"
          />
      </Navbar.Brand>
    </Navbar>

    
  );
}

export default CustomNavbar;