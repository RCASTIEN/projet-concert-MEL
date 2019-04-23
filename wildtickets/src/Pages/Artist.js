import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import {
    Container
} from 'reactstrap';
import Footer from '../components/Footer';

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
                <Footer />
            </Fragment>
        );
    }
}

export default Artist;