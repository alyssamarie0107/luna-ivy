import styles from './ShowTicketsBtn.module.css';
import Button from 'react-bootstrap/Button';

const ShowTicketsBtn = (props) => {
    return(
        <Button 
            variant="outline-danger" 
            className={ styles.ShowTicketsBtn }
            href={props.link}
            target="_blank">Tickets</Button>
    );
}

export default ShowTicketsBtn;