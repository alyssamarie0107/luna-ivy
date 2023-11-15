import styles from './Footer.module.css';

// helper function that gets the current year for the copyright in footer
const getCurrentYear = () => {
    const date = new Date();
    let current_year = date.getFullYear();
    return `©${ current_year } luna ivy`;
}

const Footer = () => {
    return (
        <footer id={ styles.Footer }>
            <span>{ getCurrentYear() }</span>
        </footer>
    );
}

export default Footer;