import styles from './Shows.module.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Shows = () => {
    return (
        <section id={ styles.Shows }>
            <h1>Show Dates</h1>
            <div id={ styles.showsContainer }>
                <ListGroup>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.Date }>
                            <p>Nov. 9, 2023</p>
                        </div>
                        <div className= { styles.Location }>
                            <p>San Francisco, CA</p>
                            <p>Brick & Mortar</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.Date }>
                            <p>Nov. 18, 2023</p>
                        </div>
                        <div className= { styles.Location }>
                            <p>San Francisco, CA</p>
                            <p>Protocol Vintage</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.Date }>
                            <p>Nov. 24, 2023</p>
                        </div>
                        <div className= { styles.Location }>
                            <p>Berkeley, CA</p>
                            <p>TBD</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.Date }>
                            <p>Dec. 1, 2023</p>
                        </div>
                        <div className= { styles.Location }>
                            <p>San Francisco, CA</p>
                            <p>Pyschedradio</p>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className={ styles.listGroup }>
                        <div className={ styles.Date }>
                            <p>Dec. 31, 2023</p>
                        </div>
                        <div className= { styles.Location }>
                            <p>Oakland, CA</p>
                            <p>New Year's House Show</p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </section>
    );
}

export default Shows;