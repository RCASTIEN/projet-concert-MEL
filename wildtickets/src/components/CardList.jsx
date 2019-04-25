import React, { Component } from 'react';
import axios from "axios";
import HorizontalCard from './HorizontalCard'
import { Container } from 'reactstrap';


class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCard: [],
      metroArea: 28909
    }
  }
  componentDidMount() {
    axios.get(`https://api.songkick.com/api/3.0/metro_areas/${this.state.metroArea}/calendar.json?apikey=5yrQwIh2tGWNTggG`).then(res => {
      this.setState({
        eventCard: res.data.resultsPage.results.event
      });
    });
  }

  filterPlace() {
    {
      this.state.eventCard.filter((city) => {
        switch (true) {
          case (res.data.resultsPage.results.event.metroArea.displayName === "Paris"):
            return ();
          case (res.data.resultsPage.results.event.metroArea.displayName === "Lille"):
            return ();
          case (res.data.resultsPage.results.event.metroArea.displayName === "Marseille"):
            return ();
          case (res.data.resultsPage.results.event.metroArea.displayName === "Bordeaux"):
            return ();
          case (res.data.resultsPage.results.event.metroArea.displayName === "Lyon"):
            return ();
          case (res.data.resultsPage.results.event.metroArea.displayName === "Toulouse"):
            return ();
        }
      })
    }
  }

  render() {

    return (
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
    );
  }
}

export default CardList;