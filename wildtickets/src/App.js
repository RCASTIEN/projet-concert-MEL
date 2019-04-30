import React, { Component, Fragment } from 'react';
import './App.css';
import './styles/Home.css';
import {
  Container,
  Form,
  Col,
  Card,
} from 'reactstrap';

// Icons
import { Music, Save, Heart } from 'react-feather';

import Header from './components/Header';
import Footer from './components/Footer'
import CardList from './components/CardList';
import CardText from 'reactstrap/lib/CardText';
import Row from 'reactstrap/lib/Row';
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
        <Container>
          <h1 className="main-title">Book unique concerts at the best places.</h1>
          <Form className="search-bar-form">
            <Col>
              <Row className="cardIntro">
                <Card className="cardThree">
                  <CardText className="textColumn">Discover popular artist and concerts near you !
Pick an artist or a date that you like and have a wonderful evening.
                  </CardText>
                  <Music className="disk-card" />
                </Card>
                <Card className="cardThree">
                  <CardText className="textColumn">Put a like on the artist you prefer
and follow his tours on the "Favorites" tab to  never miss any concert near you.
                    </CardText>
                  <Heart className="disk-card" />
                </Card>
                <Card className="cardThree">
                  <CardText className="textColumn">Save the date of a concert that you like
so you don't forget it and organize your outings. Go to the "Favorite" tab to find opportunities for a good time.
                  </CardText>
                  <Save className="disk-card" />
                </Card>
              </Row>
            </Col>
          </Form>
          <div className="mb-5">
            <h2 className="sub-title mb-auto">Popular Artists</h2>
            <EventsList />
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
