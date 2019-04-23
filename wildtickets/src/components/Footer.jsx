import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Facebook, Heart, Instagram, Twitter } from 'react-feather';

class Footer extends React.Component {
    render() {
        return (
            <Container className="footer">
                <Row>
                    <Col className="col-lg-3 col-md-6 col-12 text-center">
                        <a href="#contact" title="Contact">Contact</a>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-12 text-center">
                        <a href="#termsofuse" alt="Terms of use" title="Terms of use">Terms of use</a>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-12 text-center">
                        <a href="#sitemap" alt="Sitemap" title="Sitemap">Sitemap</a>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-12 text-center">
                        <Row>
                            <Col className="col-sm-4 col-12 text-center">
                                <a href="https://bit.ly/2GrB7Zo" alt="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                            </Col>
                            <Col className="col-sm-4 col-12 text-center">
                                <a href="https://bit.ly/2GBauCt" alt="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                            </Col>
                            <Col className="col-sm-4 col-12 text-center">
                                <a href="https://bit.ly/2ZozfJD" alt="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-3 col-12 text-center">
                        <a href="#top" alt="WildTickets" title="WildTickets">WildTickets</a>
                    </Col>
                    <Col className="col-md-6 col-12 text-center">
                        <a href="#top" alt="Made with Love by Wild Code School" title="Made with Love by Wild Code School">Made with <Heart /> by Wild Code School</a>
                    </Col>
                    <Col className="col-md-3 col-12 text-center">
                        <a href="#top" alt="Today" title="Today">Today</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;