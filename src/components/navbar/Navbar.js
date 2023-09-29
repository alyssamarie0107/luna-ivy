import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LunaIvyLogo from '../../assets/logo/lunaivy-transparent.png';
import SocialBtns from '../buttons/social-btns/SocialBtns';

function BasicExample() {
  return (
    <Navbar expand="lg" id={ styles.customNavbar  }>
        <Container>
            <Navbar.Toggle aria-controls="navbar-nav" />

            <Navbar.Collapse className={ styles.customNavbarCollapse } id="navbar-nav">
                <Nav id = { styles.customNav  }>
                    <Nav.Link className={ styles.customLink } href="#home">home</Nav.Link>
                    <Nav.Link className={ styles.customLink } href="#videos">videos</Nav.Link>
                    <Nav.Link className={ styles.customLink } href="#music">music</Nav.Link>

                    <Navbar.Brand href="#home">
                        <img
                        src={ LunaIvyLogo }
                        width="420px"
                        height="260px"
                        alt="Luna Ivy logo"
                        />
                    </Navbar.Brand>

                    <Nav.Link className={ styles.customLink } href="#about">about</Nav.Link>
                    <Nav.Link className={ styles.customLink } href="#merch">merch</Nav.Link>
                    <Nav.Link className={ styles.customLink } href="#contact">contact</Nav.Link>
                </Nav>

                <SocialBtns />
            </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default BasicExample;