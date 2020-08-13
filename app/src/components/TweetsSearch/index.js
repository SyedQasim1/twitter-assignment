import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import {Row, Col, Form} from 'react-bootstrap';
import {TextField, Button} from '@material-ui/core';
import TweetCard from '../../shared/components/TweetCard';
const Twit = require('twit');

const T = new Twit({
    consumer_key: "m02c6lCkptDVjUKTdrwmbdSFI",
    consumer_secret: "bttWNZbdflxCXSUYPhWMLpbOe53nQnmmY2azFoM5VSOK3xixQo",
    app_only_auth: true
});




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const TweetsSearch = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        keyword: "",
        tweets: []
    });
    const submitHandler = (event) => {
        var stream = T.stream('statuses/filter', {track: state.keyword});

        stream.on('tweet', function (tweet) {
            setState({...state, tweets: tweet})
        });
        event.preventDefault();
    }
    const changeHandler = (event) => {
        setState({...state, [event.target.name]: event.target.value});
        event.preventDefault();
    }

    return (
        <Container>
            <Form
                onSubmit={(event) => submitHandler(event)} noValidate autoComplete="off">
                <Col md="5">
                    <Form.Label>Enter a keyword</Form.Label>
                    <Form.Group>
                        <Form.Row className="align-items-center">

                            <Col md="8">
                                <Form.Control
                                    type="text"
                                    onChange={changeHandler}
                                />
                            </Col>

                            <Col xs="auto">
                                <Button variant="primary" type="submit">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Col>

            </Form>

            {state.tweets.map(tweet=><TweetCard {...tweet}/>)}

        </Container>
    )
}

export default TweetsSearch;
