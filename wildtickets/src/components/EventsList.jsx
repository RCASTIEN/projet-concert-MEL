import React, { Component } from 'react';
import axios from "axios";
import Bands from './Bands'
import { Container, Row } from 'reactstrap';


class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventArray: []
    }
  }
  componentDidMount() {
    axios.get("https://api.songkick.com/api/3.0/metro_areas/28886/calendar.json?apikey=5yrQwIh2tGWNTggG").then(res => {
      this.setState({
        eventArray: res.data.resultsPage.results.event
      });
    });
  }

  render() {
  
    return (
      <Container>
        <Row className='scrolling-wrapper-flexbox grid'>
          {this.state.eventArray.map((eachEvent, i) => {
            return (eachEvent.performance[0]
              &&
              <Bands
                key={i}
                name={eachEvent.performance[0].displayName}
                avatar={eachEvent.performance[0].artist.id}
                venue={eachEvent.venue.displayName}
                date={eachEvent.start.date}
                link={eachEvent.performance[0].artist.id}
                fav={eachEvent.id}

              />
            )
          })}
        </Row>
      </Container>
    );
  }
}

export default EventsList;