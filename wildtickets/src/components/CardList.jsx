import React, { Component } from 'react';
import axios from "axios";
import HorizontalCard from './HorizontalCard'
import { Container } from 'reactstrap';


class CardList extends Component {
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
          {this.state.eventArray.map((eachEvent, i) => {
            return (eachEvent.performance[0]
              &&
              <HorizontalCard
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
      </Container>
    );
  }
}

export default CardList;