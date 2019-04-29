import React, { Component } from 'react';
import axios from "axios";
import HorizontalCard from './HorizontalCard'
import { Container } from 'reactstrap';


class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCard: [],
      alert: false,
      message: undefined
    }
    this.handleAlert = this.handleAlert.bind(this)
  }

  handleAlert(msg) {
    this.setState({
      alert: true,
      message: msg
    });

    setTimeout(() => {
      this.setState({
        alert: false,
        message: undefined
      });
    }, 3000);
  }
  componentDidMount() {
    axios.get("https://api.songkick.com/api/3.0/metro_areas/28886/calendar.json?apikey=5yrQwIh2tGWNTggG").then(res => {
      this.setState({
        eventCard: res.data.resultsPage.results.event
      });
    });
  }

  render() {

    return (
      <Container>
        {
          this.state.alert &&
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        }
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
              alertFunction={this.handleAlert}

            />
          )
        })}
      </Container>
    );
  }
}

export default CardList;