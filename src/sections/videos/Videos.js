import styles from './Videos.module.css';
import PropTypes from "prop-types";
import PartyKittyDoodle from '../../assets/doodles/kitty2-transparent.png';

// video(s) section 
const Videos = ({ embedId }) => {
    return(
        <section id={ styles.Videos }>
            <h1>"pity" music video out now!</h1>

            <div id={ styles.VideosContainer }>
                <img
                    src={ PartyKittyDoodle }
                    width="300"
                    height="250px"
                    alt="Luna Ivy logo"
                />
                <div id={ styles.VideoResponsive }>
                    <iframe
                      src={`https://www.youtube.com/embed/${ embedId }`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                </div>
                <img
                    src={ PartyKittyDoodle }
                    width="300px"
                    height="250px"
                    alt="Luna Ivy logo"
                />
            </div>
        </section>
    );
}

Videos.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default Videos;