import React, { Component, Fragment } from 'react';
import axios from "axios";
import HorizontalCard from './HorizontalCard'
import { Container, Row, Col, Button } from 'reactstrap';


class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCard: [],
      metroArea: 28886
    }
  }

  componentDidMount() {
    axios.get(`https://api.songkick.com/api/3.0/metro_areas/${this.state.metroArea}/calendar.json?apikey=5yrQwIh2tGWNTggG`).then(res => {
      this.setState({
        eventCard: res.data.resultsPage.results.event
      });
    });
  }

  filterPlace(metro) {
    this.setState({
      metroArea: metro
    },
      () => {
        this.componentDidMount();
      }
    )
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <h2 className="sub-title">Nearby</h2>
          </Col>
          <Col>
            <Button className="filter-button" onClick={() => { this.filterPlace(28886) }}>Lille</Button>
          </Col>
          <Col>
            <Button className="filter-button" onClick={() => { this.filterPlace(28909) }}>Paris</Button>
          </Col>
          <Col>
            <Button className="filter-button" onClick={() => { this.filterPlace(28889) }}>Lyon</Button>
          </Col>
          <Col>
            <Button className="filter-button" onClick={() => { this.filterPlace(156979) }}>Marseille</Button>
          </Col>
          <Col>
            <Button className="filter-button" onClick={() => { this.filterPlace(28851) }}>Bordeaux</Button>
          </Col>
          <Col>
            <Button className="filter-button" onClick={() => { this.filterPlace(28930) }}>Toulouse</Button>
          </Col>
        </Row>
        <Container>
          {this.state.eventCard.map((eventCardLists, i) => {
            return (eventCardLists.performance[0]
              &&
              <HorizontalCard
                key={i}
                name={eventCardLists.performance[0].displayName}
                avatar={eventCardLists.performance[0].artist.id}
                venue={eventCardLists.venue.displayName}
                date={eventCardLists.start.date}
                link={eventCardLists.performance[0].artist.id}
                fav={eventCardLists.id}

              />
            )
          })}
        </Container>
      </Fragment>
    );
  }
}

export default CardList;