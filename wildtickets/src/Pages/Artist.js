import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom'
import Header from '../components/Header';
import {
    Container
} from 'reactstrap';

class Artist extends Component {
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
                    <h1>Artist</h1>
                </Container>
            </Fragment>
        );
    }
}

export default Artist;