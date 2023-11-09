import styles from './Home.module.css';
import { motion } from 'framer-motion';
import SavyPhoto from '../../assets/photos/purple-daisies/purple-daisies.jpg'

// animation variants
// parent
const homeContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            delay: 1,
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 1
        }
    }
}

// child
const childVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2
        }
    }
}

// home section 
const Home = () => {
    return(
        <section className={ styles.Home } id="home">
            <motion.div 
                id={ styles.homeContainer }
                variants={ homeContainerVariants }
                initial="hidden"
                animate="visible">
                <img src={ SavyPhoto } alt="Savy Cover Art" />
                <div id={ styles.newSingleInfo}>
                    <motion.h1 variants={ childVariants }>new single</motion.h1>
                    <motion.h1 variants={ childVariants }>"purple daisies" out now!</motion.h1>
                </div>
            </motion.div>
        </section>
    );
}

export default Home;