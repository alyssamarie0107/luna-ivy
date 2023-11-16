import styles from './Music.module.css';
import { motion } from 'framer-motion';
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
            duration: 1.5
        }
    },
    hover: {
        scale: 1.1
    }
}

const Music = () => {
    return (
        <section className={ styles.Music } id="music">
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