import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import KittyDoodle from '../../assets/doodles/kitty-transparent.png';

// animation variants
const contactVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            delay: 1,
            duration: 1.5
        }
    }
}

const Contact = () => {
    return (
        <section className={ styles.Contact } id="contact">
            <div id={ styles.contactContainer }>
                <motion.h2
                    variants={ contactVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        management:<br/>alyssa rodriguez
                </motion.h2>
                <motion.h2
                    variants={ contactVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        booking:<br/><a href="mailto:booklunaivy@gmail.com">booklunaivy@gmail.com</a>
                </motion.h2>
            </div>
            <motion.div 
                id={ styles.doodleContainer }
                variants={ contactVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <img
                    src={ KittyDoodle }
                    width="275px"
                    height="380px"
                    alt="KittyDoodle"
                />
            </motion.div>
        </section>
    );
}

export default Contact;