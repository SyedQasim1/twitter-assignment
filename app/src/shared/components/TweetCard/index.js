import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from './TweetCard.module.scss';

const TweetCard = (props) => {
    return (
        <div>
            <Row>
                <Col md={2}>
                    <img src="./images/user.png" className={styles.userImage} />
                </Col>
                <Col>
                    <h4>{props.name}</h4>
                    <h6>{props.username}</h6>
                    <p>{props.tweet} </p>
                </Col>
            </Row>
        </div>
    )
};
TweetCard.defaultProps={
    name:'Rayan Rover',
    username:'@ryan',
    tweet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
}

export default TweetCard;
