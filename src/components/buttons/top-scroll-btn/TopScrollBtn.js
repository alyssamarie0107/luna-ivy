import { Link } from 'react-scroll';
import styles from './TopScrollBtn.module.css';
import PartyKittyDoodle from '../../../assets/doodles/kitty2-transparent.png';

const TopScrollBtn = () => {
    return (
        <Link 
            id={ styles.topScrollBtn }
            to="home"
            spy= {true } 
            smooth={ true } 
            offset={ -400 } 
            duration={ 100 }>
                <img 
                    src={ PartyKittyDoodle }
                    width="100px"
                    height="80px"
                    alt="Party Kitty" />
        </Link>
    );
}

export default TopScrollBtn;