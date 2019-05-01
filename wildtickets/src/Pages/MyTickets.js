import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Container
} from 'reactstrap';

class MyTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <h1>My tickets</h1>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default MyTickets;