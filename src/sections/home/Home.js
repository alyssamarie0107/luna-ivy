import styles from './Home.module.css';
import Navbar from '../../components/navbar/Navbar';
import SavyPhoto from '../../assets/photos/savy/savy-cover-art.jpg';

// home section 
const Home = () => {
    return(
        <section id={ styles.Home }>
            {/* navbar */}
            <Navbar />

            <div id={ styles.homeContainer }>
                <img
                    src={ SavyPhoto }
                    width="450px"
                    height="380px"
                    alt="Savy Cover Art"
                />
            </div>

            <div id={ styles.newSingleInfo}>
                <h1>new single</h1>
                <h1>"savy" out now!</h1>
            </div>
        </section>
    );
}

export default Home;