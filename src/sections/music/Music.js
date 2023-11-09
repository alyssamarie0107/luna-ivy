import styles from './Music.module.css';
import { motion } from 'framer-motion';
import SavyPhoto2 from '../../assets/photos/savy/savy-cover-art.jpg';
import Pity from '../../assets/photos/pity/pity.png';

// animation variants
const musicVariants = {
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
                        variants={ musicVariants }
                        whileHover="hover"
                        src={ SavyPhoto2 } 
                        alt="Savy2"
                    />
                    <motion.img 
                        variants={ musicVariants }
                        whileHover="hover"
                        src={ Pity }
                        alt="Pity"
                    />
            </motion.div>
        </section>
    );
}

export default Music;