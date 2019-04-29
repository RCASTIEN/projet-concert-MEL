import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Bands from './Bands'
import axios from 'axios';

class FavoriteBandsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesArray: [],
            eventArray: [],
        };
    }

    componentDidMount() {
        let bands_id = [];

        axios.get("http://localhost:5050/favorites").then(res => {
            bands_id = res.data.map((band) => {
                return band.band_id;
            });
        });

        axios.get("https://api.songkick.com/api/3.0/metro_areas/28886/calendar.json?apikey=5yrQwIh2tGWNTggG").then(res => {
            const favEvents = res.data.resultsPage.results.event.filter((SK) => {
                return bands_id.includes(SK.id);
            });
            this.setState({
                eventArray: res.data.resultsPage.results.event,
                favoritesArray: favEvents
            });
        });
    }
    
    render() {
        console.log(this.state.favoritesArray);
        return (
            <Fragment>
                <Container>
                    <h1>Favorite Bands</h1>
                    <Row className='scrolling-wrapper-flexbox grid'>
                        {this.state.favoritesArray.map((eachEvent, i) => {
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
                                    alertFunction={this.handleAlert}
                                />
                            )
                        })}
                    </Row>
                </Container>
            </Fragment>
        )
    }

};

export default FavoriteBandsList;