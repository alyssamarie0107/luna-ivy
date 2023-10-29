import styles from './Home.module.css';
import SavyPhoto from '../../assets/photos/savy/savy-cover-art.jpg';

// home section 
const Home = () => {
    return(
        <section className={ styles.Home } id="home">
            <div id={ styles.homeContainer }>
                <img src={ SavyPhoto } alt="Savy Cover Art"/>
                <div id={ styles.newSingleInfo}>
                    <h1>new single</h1>
                    <h1>"savy" out now!</h1>
                </div>
            </div>
        </section>
    );
}

export default Home;