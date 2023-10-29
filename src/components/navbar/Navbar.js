import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { Navbar, Container } from 'react-bootstrap';
import LunaIvyLogo from '../../assets/logo/lunaivy-transparent.png';
import SocialBtns from '../buttons/social-btns/SocialBtns';

/* 
 * navbar component
 * if you want react to handle the routing only in the browswer 
 * and to intercept those requests for new pages, replace anchor 
 * tags with Link instead. Note, Link does not use href attribute,
 * but rather uses 'to'.
 * 
 * instead of Link from bootstrap, using Link from react-scroll
 * https://www.npmjs.com/package/react-scroll
*/ 
const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id={ styles.customNavbar  }>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      <Navbar.Collapse className={ styles.customNavbarCollapse } id="responsive-navbar-nav">
        <Container id={ styles.customNav }>
          <div>
            <Link 
              className={ styles.customLink }
              to="shows"
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={100}>
                shows
            </Link>
            <Link 
              className={ styles.customLink } 
              to="videos"
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={100}>videos</Link>
            <Link 
              className={ styles.customLink }
              to="music"
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={100}>
                music
            </Link>
          </div>

          <Navbar.Brand href="/" id={ styles.NavBrand }>
              <img
              src={ LunaIvyLogo }
              alt="Luna Ivy logo"
              />
          </Navbar.Brand>

          <div>
            <Link 
              className={ styles.customLink }
              to="merch"
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={100}>
                merch
            </Link>
            <Link 
              className={ styles.customLink }
              to="contact"
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={100}>contact</Link>
            <SocialBtns />
          </div>
        </Container>
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