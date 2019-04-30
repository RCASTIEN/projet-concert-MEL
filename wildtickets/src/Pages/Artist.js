import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import axios from "axios";
import "../styles/Artist.css";
import {
    Container
} from 'reactstrap';
import Footer from '../components/Footer';

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      artistName: "Not on Tour...",
      artistId: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.songkick.com/api/3.0/artists/${
          this.props.match.params.artistId
        }/calendar.json?apikey=5yrQwIh2tGWNTggG`
      )
      .then(res => {
        this.setState({
          artists: res.data.resultsPage.results.event,
          artistName: res.data.resultsPage.results.event[0].performance[0].artist.displayName,
          artistId: res.data.resultsPage.results.event[0].performance[0].artist.id
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="bg-white">
          <img
            className="cadre"
            src={
              "https://images.sk-static.com/images/media/profile_images/artists/" +
              this.state.artistId +
              "/huge_avatar"
            }
            alt="Background"
            title={this.state.artistName}
          />
          <img
            className="doublev"
            src={
              "https://images.sk-static.com/images/media/profile_images/artists/" +
              this.state.artistId +
              "/huge_avatar"
            }
            alt="W"
            title={this.state.artistName}
          />
          <img
            className="tet"
            src={
              "https://images.sk-static.com/images/media/profile_images/artists/" +
              this.state.artistId +
              "/huge_avatar"
            }
            alt="T"
            title={this.state.artistName}
          />
          <div className="shadow text-center">
            <h2>{this.state.artistName}</h2>
            <p>{this.state.artists.length + " date(s)"}</p>
            <hr />
          </div>
        </div>
        <div>
          {this.state.artists.map((artist, i) => (
            <div key={i}>
              <div className="shadow my-5 p-3">
                <a
                  href={"/concert/" + this.state.artists[i].id}
                  alt=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="text-center">{artist.displayName}</h4>
                  <div className="row">
                    <h5 className="col-sm-4 col-12 text-center">
                      {artist.location.city}
                    </h5>
                    <h5 className="col-sm-4 col-12 text-center">
                      {artist.start.date}
                    </h5>
                    <h5 className="col-sm-4 col-12 text-center">
                      {artist.start.time}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Artists;