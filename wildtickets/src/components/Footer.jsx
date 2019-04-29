import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Facebook, Heart, Instagram, Twitter } from 'react-feather';
import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <Container className="footer">
                <Row>
                    <Col className="col-lg-4 col-md-6 col-12 text-center feather">
                        <a href="/" alt="WildTickets" title="WildTickets">WildTickets</a>
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 text-center feather">
                        <a href="/termsofuse" alt="Terms of use" title="Terms of use">Terms of use</a>
                    </Col>
                    <Col className="col-lg-4 col-12 text-center">
                        <Row>
                            <Col className="col-sm-4 text-center feather">
                                <a href="https://www.facebook.com/wildcodeschool/" alt="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer"><Facebook className="feather"/></a>
                            </Col>
                            <Col className="col-sm-4 text-center feather">
                                <a href="https://twitter.com/wildcodeschool" alt="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer"><Twitter className="feather"/></a>
                            </Col>
                            <Col className="col-sm-4 text-center feather">
                                <a href="https://www.instagram.com/wildcodeschool/?hl=fr" alt="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer"><Instagram className="feather"/></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center feather">
                        <a href="https://wildcodeschool.fr/lille-2/" alt="Made with Love by Wild Code School" title="Made with Love by Wild Code School" target="_blank" rel="noopener noreferrer">Made with <Heart className="feather"/> by Wild Code School</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;