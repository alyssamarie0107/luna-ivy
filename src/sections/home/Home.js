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

// children
const childVariants1 = {
    hidden: {
        scale: 0,
        x: "-100vw",
        rotate: 360
    },
    visible: {
        scale: 1,
        x: 0,
        rotate: 0,
        transition: {
            duration: 2
        }
    }
}

const childVariants2 = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5
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
                    <motion.img 
                        src={ SavyPhoto } 
                        alt="Savy Cover Art"
                        variants={ childVariants1 } />
                    <div id={ styles.newSingleInfo}>
                        <motion.h1 variants={ childVariants2 }>new single</motion.h1>
                        <motion.h1 variants={ childVariants2 }>"purple daisies" out now!</motion.h1>
                    </div>
            </motion.div>
        </section>
    );
}

export default Home;