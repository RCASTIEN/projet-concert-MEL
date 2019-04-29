import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import '../styles/Concert.css';
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

class Concerts extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <img className="oblique" src="https://images.sk-static.com/images/media/profile_images/artists/558710/huge_avatar" alt="" title="" />
                <img className="cercle" src="https://images.sk-static.com/images/media/profile_images/artists/558710/huge_avatar" alt="" title="" />
                <p className="text-center">Concert</p>
            </Fragment>
        );
    };
};

export default Concerts;