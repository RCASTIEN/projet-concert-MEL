import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom'
import Header from '../components/Header';
import {
    Container
} from 'reactstrap';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Container className="bg-to-delete">
                    <h1>Cette page n'existe pas <span role="img" aria-label="img">🤔</span></h1>
                </Container>
            </Fragment>
        );
    }
}

export default NotFound;