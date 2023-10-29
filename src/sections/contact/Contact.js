import styles from './Contact.module.css';
import KittyDoodle from '../../assets/doodles/kitty-transparent.png';

const Contact = () => {
    return (
        <section id={ styles.Contact }>
            <div id={ styles.contactContainer }>
                <h2>Management:<br/>Alyssa Rodriguez</h2>
                <h2>Booking:<br/><a href="mailto:booklunaivy@gmail.com">booklunaivy@gmail.com</a></h2>
            </div>
            <div id={ styles.doodleContainer }>
                <img
                    src={ KittyDoodle }
                    width="275px"
                    height="380px"
                    alt="KittyDoodle"
                />
            </div>
        </section>
    );
}

export default Contact;