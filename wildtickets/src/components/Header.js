import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav
} from 'reactstrap';

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
                <Navbar color="light" light expand="md" className="sticky-top">
                    <Link className="gradient-logo" to="/">WildTickets</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Link to="/">HOME</Link>
                            <Link to="/artist">ARTISTS</Link>
                            <Link to="/concert">CONCERTS</Link>
                            <Link to="/mytickets">MY TICKETS</Link>
                            <Link to="/favorites">FAVORITES</Link>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Header;
