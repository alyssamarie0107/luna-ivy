import styles from './Videos.module.css';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import PartyKittyDoodle from '../../assets/doodles/kitty2-transparent.png';

// animation variants
const videosVariants = {
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

// video(s) section 
const Videos = ({ embedId }) => {
    return(
        <section className={ styles.Videos } id="videos">
            <motion.h1
                variants={ videosVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    "pity" music video out now!
            </motion.h1>
            <motion.div 
                id={ styles.videosContainer }
                variants={ videosVariants }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    <img src={ PartyKittyDoodle } alt="Party Kitty"/>
                    <div id={ styles.videoResponsive }>
                        <iframe
                        src={`https://www.youtube.com/embed/${ embedId }`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        />
                    </div>
                    <img src={ PartyKittyDoodle } alt="Party Kitty"/>
            </motion.div>
        </section>
    );
}

Videos.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default Videos;