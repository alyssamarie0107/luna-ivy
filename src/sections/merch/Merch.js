import styles from './Merch.module.css';
import { motion } from 'framer-motion';
import CreamShirt from '../../assets/photos/merch/cream-shirt.png';
import BlackShirt from '../../assets/photos/merch/black-shirt.png'

// animation variants
const merchVariants = {
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
}

const Music = () => {
    return (
        <section className={ styles.Merch } id="merch">
            <motion.h1
                variants={ merchVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    merch<br/>available soon!
            </motion.h1>
            <motion.div 
                id={ styles.MerchContainer }>
                    <motion.img 
                        src={ CreamShirt } 
                        alt="Cream Shirt"
                        variants={ merchVariants }
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                    />
                    <motion.img 
                        src={ BlackShirt }
                        alt="Black Shirt"
                        variants={ merchVariants }
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