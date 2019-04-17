import React, { Component, Fragment } from 'react';
import './App.css';
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
          <div className="mb-5">
            <h2 className="sub-title mb-auto">Popular Artists</h2>
            <EventsList />
          </div>
          <br></br>
          <h2 className="sub-title">Nearby</h2>
        </Container>
      </Fragment>
    );
  }
}

export default App;
