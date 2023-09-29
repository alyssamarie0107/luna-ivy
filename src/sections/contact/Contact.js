import styles from './Contact.module.css';
import KittyDoodle from '../../assets/doodles/kitty-transparent.png';

const Contact = () => {
    return (
        <section id={ styles.Contact }>
            <div id={ styles.contactContainer }>
                <h1>Management: Alyssa Rodriguez</h1>
                <h1>Booking: <a href="mailto:booklunaivy@gmail.com">booklunaivy@gmail.com</a></h1>
            </div>

            <div id={ styles.doodleContainer }>
                <img
                    src={ KittyDoodle }
                    width="300px"
                    height="380px"
                    alt="Pity"
                />
            </div>
        </section>
    );
}

export default Contact;