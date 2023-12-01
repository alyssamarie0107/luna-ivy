import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState } from 'react';
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
            duration: 1
        }
    }
}

const backToTopVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const Contact = () => {
    const [isShown, setIsShown] = useState(false);

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
                    <div>
                        <Link
                            to="home"
                            spy= {true } 
                            smooth={ true } 
                            offset={ -400 } 
                            duration={ 100 }>
                                <img
                                    id={ styles.kittyDoodle }
                                    src={ KittyDoodle }
                                    alt="KittyDoodle"
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                />
                                {isShown && (
                                    <motion.p
                                        id={ styles.backToTop }
                                        variants={ backToTopVariants }
                                        initial="hidden"
                                        whileInView="visible">
                                            back to top
                                    </motion.p>
                                )}
                            </Link>
                    </div>
            </motion.div>
        </section>
    );
}

export default Contact;