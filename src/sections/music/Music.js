import styles from './Music.module.css';
import SavyPhoto2 from '../../assets/photos/savy/savy-2.png';
import Pity from '../../assets/photos/pity/pity.png';

const Music = () => {
    return (
        <section id={ styles.Music }>
            <div id={ styles.musicContainer }>
                <img
                        src={ SavyPhoto2 }
                        width="190px"
                        height="650px"
                        alt="Savy2"
                />

                <img
                    src={ Pity }
                    width="520px"
                    height="480px"
                    alt="Pity"
                />
            </div>
        </section>
    );
}

export default Music;