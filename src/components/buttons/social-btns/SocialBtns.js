import styles from './SocialBtns.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons'

// social btn component
// for spotify, apple music, soundcloud, instagram
const SocialBtn = (props) => {
    return (
        <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href={ props.href }>
                { props.children }
        </a>
    );
}

const SocialBtns = () => {
    return (
        <div id={ styles.SocialBtns }>
            <div id={ styles.socialBtnsContainer }>
                {/* spotify */}
                <SocialBtn href="https://open.spotify.com/artist/4vuzGI5ng663Sskw6mrd0v">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faSpotify } size="2x"/>
                </SocialBtn>

                {/* apple music */}
                <SocialBtn href="https://music.apple.com/us/artist/luna-ivy/1683069273">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faApple } size="2x"/>
                </SocialBtn>

                {/* soundcloud */}
                <SocialBtn href="https://on.soundcloud.com/ZSnyCdwVHeVUschq6">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faSoundcloud } size="2x"/>
                </SocialBtn>

                {/* instagram */}
                <SocialBtn href="https://www.instagram.com/lunalvy_/">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faInstagram } size="2x"/>
                </SocialBtn>
            </div>
        </div>
    );
}

export default SocialBtns;