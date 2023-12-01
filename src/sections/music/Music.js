import styles from './Music.module.css';
import { motion } from 'framer-motion';
import Beetle from '../../assets/doodles/beetle.png';
import SavyPhoto2 from '../../assets/photos/savy/savy-cover-art.jpg';
import Pity from '../../assets/photos/pity/pity.png';

// animation variants
const musicVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            delay: 1,
            duration: 1
        }
    },
    hover: {
        scale: 1.1
    }
}

const Music = () => {
    return (
        <section className={ styles.Music } id="music">
            <div id={ styles.musicHeader }>
                <motion.img 
                    src={ Beetle } 
                    alt="Beetle Doodle"
                    variants={ musicVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
                <motion.h1
                    variants={ musicVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        music
                </motion.h1>
                <motion.img 
                    src={ Beetle } 
                    alt="Beetle Doodle"
                    variants={ musicVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
            </div>
            <motion.div 
                id={ styles.musicContainer }>
                    <motion.img 
                        src={ SavyPhoto2 } 
                        alt="Savy2"
                        variants={ musicVariants }
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                    />
                    <motion.img 
                        src={ Pity }
                        alt="Pity"
                        variants={ musicVariants }
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                    />
            </motion.div>
        </section>
    );
}

export default Music;