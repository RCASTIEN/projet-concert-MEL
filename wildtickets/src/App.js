import React, { Component, Fragment } from 'react';
import './App.css';
import './styles/Home.css';
import {
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Col,
  Card,
} from 'reactstrap';

// Icons
import { Search, Save, Heart } from 'react-feather';

import Header from './components/Header';
import Footer from './components/Footer'
import CardList from './components/CardList';
import EventPopular from './components/EventPopular';
import CardText from 'reactstrap/lib/CardText';
import Row from 'reactstrap/lib/Row';

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
        <Container>
          <h1 className="main-title">Book unique concerts at the best prices.</h1>
          <Form className="search-bar-form">
          <Col>
            <Row>
              <Col>
                <Card className="cardThree">
                  <CardText >Discover popular artist and concerts near you !
Pick an artist or a date that you like and have a wonderful evening.
                  </CardText>
                  <Save className="disk-card" />
                </Card>
              </Col>
              <Col>
                <Card className="cardThree">
                  <CardText >Put a like on the artist you prefer
and follow his tours on the "Favorites" tab to  never miss any concert near you.</CardText>
                </Card>
              </Col>
              <Col>
                <Card className="cardThree">
                  <CardText >Save the date of a concert that you like
so you don't forget it and organize your outings. Go to the "Favorite" tab to find opportunities for a good time.
                  <Heart className="disk-card" />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Col>
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
            <EventPopular />
          </div>
          <br></br>
          <CardList />
          <Footer />
        </Container>
      </Fragment>
    );
  }
}

export default App;
