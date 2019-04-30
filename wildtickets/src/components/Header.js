import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from './BackToTop';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from 'reactstrap';
import '../styles/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar color="light" light expand="lg" className="sticky-top">
                    <Link className="gradient-logo" to="/">WildTickets</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Link to="/" className="feather">HOME</Link>
                            <Link to="/favorites">FAVORITES</Link>
                        </Nav>
                    </Collapse>
                </Navbar>
                <BackToTop />
            </Fragment>
        );
    }
}

export default Header;
