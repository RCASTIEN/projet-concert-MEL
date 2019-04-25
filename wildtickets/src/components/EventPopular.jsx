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
            this.setState({
                eventPopulars: res.data.resultsPage.results.event,
            });
            console.log(this.state.eventPopulars[0].popularity)
        });
    }

    render() {
        this.state.eventPopulars.sort()
        const orderEventPopulars= this.state.eventPopulars.reverse();

        return (
            <Container>
                <Row className='scrolling-wrapper-flexbox grid'>
                    {orderEventPopulars.map((eachPopular, i) => {
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