import React, { Component, Fragment } from 'react';
import './styles/App.css';
import './styles/main.css';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from 'reactstrap';

// Icons
import { Heart, Search } from 'react-feather';

import Header from './components/Header';
import EventsList from './components/EventsList';

class App extends Component {
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
        <Header />
        <Container className="bg-to-delete">
          <h1 className="main-title">Book unique concerts at the best prices.</h1>
          <Form className="search-bar-form">
            <InputGroup>
              <InputGroupAddon addonType="prepend" className="main-search-icon"><Search /></InputGroupAddon>
              <Input className="search-bar" placeholder="Search by place, artist, genre..." />
              <InputGroupAddon addonType="append">
                <Button className="search-bar-btn" color="primary">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <h2 className="sub-title">Featured Artists</h2>
          <Row className=" grid grid-xs--scroll grid-xs-2--scroll">
            <Col className="grid__item">
              <Card>
                <div className="img-container">
                  <CardImg className="oblique-img" top width="100%" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                </div>
                <CardBody>
                  <CardTitle><h4 className="ellips-title">Artist Name</h4></CardTitle>
                  <Heart className="heart-little-card" />
                  <Button className="discover-btn">DISCOVER</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="grid__item">
              <Card>
                <div className="img-container">
                  <CardImg className="oblique-img" top width="100%" src="https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                </div>
                <CardBody>
                  <CardTitle><h4 className="ellips-title">Artist Name</h4></CardTitle>
                  <Heart className="heart-little-card" />
                  <Button className="discover-btn">DISCOVER</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="grid__item">
              <Card>
                <div className="img-container">
                  <CardImg className="oblique-img" top width="100%" src="https://images.pexels.com/photos/518389/pexels-photo-518389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                </div>
                <CardBody>
                  <CardTitle><h4 className="ellips-title">Artist Name</h4></CardTitle>
                  <Heart className="heart-little-card" />
                  <Button className="discover-btn">DISCOVER</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="grid__item">
              <Card>
                <div className="img-container">
                  <CardImg className="oblique-img" top width="100%" src="https://images.pexels.com/photos/417475/pexels-photo-417475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                </div>
                <CardBody>
                  <CardTitle><h4 className="ellips-title">Artist Name</h4></CardTitle>
                  <Heart className="heart-little-card" />
                  <Button className="discover-btn">DISCOVER</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <EventsList />
        </Container>
      </Fragment>
    );
  }
}

export default App;
