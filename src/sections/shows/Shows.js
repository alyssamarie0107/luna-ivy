import styles from './Shows.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
// import ShowTicketsBtn from '../../components/buttons/show-tickets-btn/ShowTicketsBtn';

const Shows = () => {
    return (
        <section className={ styles.Shows } id="shows">
            <h1>Show Dates</h1>
            <div id={ styles.showsContainer }>
                <ListGroup>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.DateVenue }>
                            <p>Nov. 9, 2023</p>
                            <p>Brick & Mortar</p>
                        </div>
                        <div className= { styles.City }>
                            <p>San Francisco, CA</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.DateVenue }>
                            <p>Nov. 18, 2023</p>
                            <p>House Show</p>
                        </div>
                        <div className= { styles.City }>
                            <p>Hayward, CA</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.DateVenue }>
                            <p>Dec. 1, 2023</p>
                            <p>Psyched! Radio SF</p>
                        </div>
                        <div className= { styles.City }>
                            <p>San Francisco, CA</p>
                        </div>
                        {/* <ShowTicketsBtn link="https://www.ticketweb.com/event/ha-vay-mommy-mommy-luna-neck-of-the-woods-tickets/13790888"/> */}
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.DateVenue }>
                            <p>Dec. 10, 2023</p>
                            <p>Neck of the Woods</p>
                        </div>
                        <div className= { styles.City }>
                            <p>San Francisco, CA</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.DateVenue }>
                            <p>Dec. 31, 2023</p>
                            <p>New Year's House Show</p>
                        </div>
                        <div className= { styles.City }>
                            <p>Oakland, CA</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.DateVenue }>
                            <p>Jan. 27, 2024</p>
                            <p>The Sesh</p>
                        </div>
                        <div className= { styles.City }>
                            <p>Sacramento, CA</p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </section>
    );
}

export default Shows;