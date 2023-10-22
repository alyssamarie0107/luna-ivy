import styles from './SocialBtns.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faSoundcloud, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

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
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faSpotify } />
                </SocialBtn>

                {/* apple music */}
                <SocialBtn href="https://music.apple.com/us/artist/luna-ivy/1683069273">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faApple } />
                </SocialBtn>

                {/* soundcloud */}
                <SocialBtn href="https://on.soundcloud.com/ZSnyCdwVHeVUschq6">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faSoundcloud } />
                </SocialBtn>

                {/* instagram */}
                <SocialBtn href="https://www.instagram.com/lunalvy_/">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faInstagram } />
                </SocialBtn>

                {/* tiktok */}
                <SocialBtn href="https://www.tiktok.com/@lunaivy_">
                    <FontAwesomeIcon className={ styles.socialBtn } icon={ faTiktok } />
                </SocialBtn>
            </div>
        </div>
    );
}

export default SocialBtns;