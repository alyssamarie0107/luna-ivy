import styles from './Home.module.css';
import Navbar from '../../components/navbar/Navbar';

// home section 
const Home = () => {
    return(
        <section className={ styles.Home }>
            <div className={ styles.homeContainer }>
                {/* navbar */}
                <Navbar />
            </div>
        </section>
    );
}

export default Home;