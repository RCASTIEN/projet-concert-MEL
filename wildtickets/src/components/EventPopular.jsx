import React, { Component } from 'react';
import axios from "axios";
import Popular from './Popular'
import { Container, Row } from 'reactstrap';


class EventPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventPopulars: [],
        }
    }
    componentDidMount() {
        axios.get("https://api.songkick.com/api/3.0/metro_areas/28886/calendar.json?apikey=5yrQwIh2tGWNTggG").then(res => {
            const mySortedEvents = res.data.resultsPage.results.event.sort((evtA, evtB)=>{
                if(evtA.popularity > evtB.popularity) {
                    return -1;
                } else {
                    return 1;
                }
            });

            this.setState({
                eventPopulars: mySortedEvents,
            });
        });
    }

    render() {
        return (
            <Container>
                <Row className='scrolling-wrapper-flexbox grid'>
                    {this.state.eventPopulars.map((eachPopular, i) => {
                        return (eachPopular.performance[0]
                            &&
                            <Popular
                                key={i}
                                name={eachPopular.performance[0].displayName}
                                avatar={eachPopular.performance[0].artist.id}
                                venue={eachPopular.venue.displayName}
                                date={eachPopular.start.date}
                                popularity={eachPopular.uri.popularity}
                                fav={eachPopular.id}
                            />
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export default EventPopular;