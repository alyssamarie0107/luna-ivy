import { Link } from 'react-scroll';
// import { useState, useEffect } from 'react';
import styles from './TopScrollBtn.module.css';
import PartyKittyDoodle from '../../../assets/doodles/kitty2-transparent.png';

const TopScrollBtn = () => {
    // const [btnVisbility, setBtnVisibility] = useState("hidden");

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     const handleBtnVisibility = () => {
    //         window.pageYOffset > 300 ? setBtnVisibility(true) : setBtnVisibility(false);
    //     }

    //     window.addEventListener('scroll', handleBtnVisibility);
    //   });

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