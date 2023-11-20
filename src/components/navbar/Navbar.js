import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import LunaIvyLogo from '../../assets/logo/lunaivy-transparent.png';
import SocialBtns from '../buttons/social-btns/SocialBtns';


// animation variants 
const navbarVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity:1,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  }
}

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
    <motion.div 
      variants={ navbarVariants }
      initial="hidden" 
      animate="visible">

        <Navbar key='lg' expand='lg' id={ styles.customNavbar }>
          <Container fluid id={ styles.navbarContainer }>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg"/>
            <Navbar.Offcanvas
              className={ styles.Offcanvas }
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
              restoreFocus={false}
            >
              <Offcanvas.Header closeButton id={ styles.closeButton }></Offcanvas.Header>
              <Offcanvas.Body id={ styles.OffcanvasBody }>
                <Nav id={ styles.customNav }>
                  <div>
                      <Link 
                        className={ styles.customLink }
                        to="shows"
                        spy= {true } 
                        smooth={ true } 
                        offset={ -50 } 
                        duration={ 100 }>
                          shows
                      </Link>
                      <Link 
                        className={ styles.customLink }
                        to="videos"
                        spy={ true } 
                        smooth={ true } 
                        offset={ 0 } 
                        duration={ 100 }>
                          videos
                      </Link>
                      <Link 
                        className={ styles.customLink }
                        to="music"
                        spy={ true } 
                        smooth={ true } 
                        offset={ 0 } 
                        duration={ 100 }>
                          music
                      </Link>
                    </div>

                    {/* for desktop view */}
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
                        spy={ true } 
                        smooth={ true } 
                        offset={ 0 } 
                        duration={ 100 }>
                          merch
                      </Link>
                      <Link 
                        className={ styles.customLink }
                        to="contact"
                        spy={ true } 
                        smooth={ true } 
                        offset={ -50 } 
                        duration={ 100 }>
                          contact
                      </Link>
                      <SocialBtns />
                    </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          {/* for mobile view */}
          <Navbar.Brand href="#home" id={ styles.NavBrand2 }>
              <img
              src={ LunaIvyLogo }
              alt="Luna Ivy logo2"
              />
          </Navbar.Brand>
        </Navbar>
    </motion.div>
  );
}

export default CustomNavbar;