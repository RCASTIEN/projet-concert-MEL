import React, { Component, Fragment } from 'react';
import './App.css';
import './styles/Home.css';
import {
  Row,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';

// Icons
import {  Search } from 'react-feather';

import Header from './components/Header';
import EventsList from './components/EventsList';
import CardList from './components/CardList';
import DropDownButton from './components/DropDownButton';

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
          <Row>
            <h2 className="sub-title col-9">Nearby</h2>
            <DropDownButton />
          </Row>
          <CardList />
        </Container>
      </Fragment>
    );
  }
}

export default App;
