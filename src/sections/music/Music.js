import styles from './Music.module.css';
import SavyPhoto2 from '../../assets/photos/savy/savy-cover-art.jpg';
import Pity from '../../assets/photos/pity/pity.png';

const Music = () => {
    return (
        <section className={ styles.Music } id="music">
            <div id={ styles.musicContainer }>
                <img src={ SavyPhoto2 } alt="Savy2"/>
                <img src={ Pity } alt="Pity"/>
            </div>
        </section>
    );
}

export default Music;