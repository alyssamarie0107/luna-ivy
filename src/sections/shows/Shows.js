import styles from './Shows.module.css';
import { motion } from 'framer-motion';
import ListGroup from 'react-bootstrap/ListGroup';

// animation variants
const showContainerVariants = {
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
                variants={ showContainerVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    Show Dates
            </motion.h1>
            <motion.div 
                id={ styles.showsContainer }
                variants={ showContainerVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    <ListGroup>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Nov. 18, 2023</p>
                                <p>House Show</p>
                            </div>
                            <div className= { styles.City }>
                                <p>Hayward, CA</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Dec. 1, 2023</p>
                                <p>Psyched! Radio SF</p>
                            </div>
                            <div className= { styles.City }>
                                <p>San Francisco, CA</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Dec. 10, 2023</p>
                                <p>Neck of the Woods</p>
                            </div>
                            <div className= { styles.City }>
                                <p>San Francisco, CA</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Dec. 31, 2023</p>
                                <p>New Year's House Show</p>
                            </div>
                            <div className= { styles.City }>
                                <p>Oakland, CA</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={ styles.listGroup }>
                            <div className={ styles.DateVenue }>
                                <p>Jan. 27, 2024</p>
                                <p>The Sesh</p>
                            </div>
                            <div className= { styles.City }>
                                <p>Sacramento, CA</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
            </motion.div>
        </section>
    );
}

export default Shows;