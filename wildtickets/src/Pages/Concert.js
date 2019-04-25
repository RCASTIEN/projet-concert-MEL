import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import axios from "axios";
import '../styles/Concert.css';

class Concerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concertArray: []
        }
    }

    componentDidMount() {
        axios.get("https://api.songkick.com/api/3.0/artists/558710/calendar.json?apikey=5yrQwIh2tGWNTggG")
            .then(res => {
                this.setState({
                    concertsArray: res.data.resultsPage.results.event
                });
                console.log(this.state.concertsArray);
                console.log(this.state.concertsArray[0].performance[0].artist.id);
            });
    };

    render() {
        return (
            <Fragment>
                <Header />
                <img className="oblique" src="https://images.sk-static.com/images/media/profile_images/artists/558710/huge_avatar" alt="" title="ARTIST" />
                <img className="cercle" src="https://images.sk-static.com/images/media/profile_images/artists/558710/huge_avatar" alt="" title="CONCERT" />
                <p className="text-center">Concerts de {this.state.concertArray}</p>
            </Fragment>
        );
    };
};

export default Concerts;