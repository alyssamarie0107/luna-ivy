import styles from './Shows.module.css';
import { motion } from 'framer-motion';
import ListGroup from 'react-bootstrap/ListGroup';
import animationVideo from '../../assets/videos/animation.mov';

// animation variants
const showsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            delay: 1,
            duration: 0.5
        }
    }
}

const Shows = () => {
    return (
        <section className={ styles.Shows } id="shows">
            <motion.h1
                variants={ showsVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    show dates
            </motion.h1>
            <motion.div 
                id={ styles.showsContainer }
                variants={ showsVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    <ListGroup>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Dec. 22, 2023</p>
                                <p>House Show</p>
                            </div>
                            <div className= { styles.City }>
                                <p>Oakland, CA</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Dec. 31, 2023</p>
                                <p>New Years House Show</p>
                            </div>
                            <div className= { styles.City }>
                                <p>San Francisco, CA</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
            </motion.div>

            <video muted autoPlay loop controls={false} id={ styles.videoAnimation }>
                <source src={ animationVideo }/>
            </video>
        </section>
    );
}

export default Shows;