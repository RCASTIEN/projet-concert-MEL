import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Container
} from 'reactstrap';

class Concert extends Component {
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
                    <h1>Concert</h1>
                </Container>
                <Footer/>
            </Fragment>
        );
    }
}

export default Concert;