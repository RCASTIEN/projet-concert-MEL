import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import axios from "axios";

class Concerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            artistName: "Not on Tour...",
            artistId: ""
        }
    }

    componentDidMount() {
        axios.get(`https://api.songkick.com/api/3.0/artists/${this.props.match.params.artistId}/calendar.json?apikey=5yrQwIh2tGWNTggG`)
            .then(res => {
                console.log(res.data.resultsPage.results)
                this.setState({
                    artists: res.data.resultsPage.results.event,
                    artistName: res.data.resultsPage.results.event[0].performance[0].artist.displayName,
                    artistId: res.data.resultsPage.results.event[0].performance[0].artist.id
                });
            });
    };

    render() {
        return (
            <Fragment>
                <Header />
                <div className="text-center">
                    <img src={"https://images.sk-static.com/images/media/profile_images/artists/" + this.state.artistId + "/huge_avatar"} alt="Artist" />
                    <h1>{this.state.artistName}</h1>
                </div>
                {this.state.artists.map((artist, i) => {
                    return (
                        <div key={i}>
                            <hr />
                            <a href={"/concert/" + this.state.artists[i].id} alt="" target="_blank" rel="noopener noreferrer">
                                <h2 className="text-center">{artist.type}</h2>
                                <h3 className="text-center">{artist.displayName}</h3>
                                <h4 className="text-center">{artist.location.city}</h4>
                                <h5 className="text-center">{artist.start.date} {artist.start.time}</h5>
                            </a>
                        </div>
                    )
                })}
            </Fragment>
        );
    };
};

export default Concerts;