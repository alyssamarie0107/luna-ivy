import styles from './Home.module.css';
import SavyPhoto from '../../assets/photos/purple-daisies/purple-daisies.jpg'

// home section 
const Home = () => {
    return(
        <section className={ styles.Home } id="home">
            <div id={ styles.homeContainer }>
                <img src={ SavyPhoto } alt="Savy Cover Art"/>
                <div id={ styles.newSingleInfo}>
                    <h1>new single</h1>
                    <h1>"purple daisies" out 11/9!</h1>
                </div>
            </div>
        </section>
    );
}

export default Home;