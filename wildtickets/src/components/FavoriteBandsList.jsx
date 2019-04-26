import React, { Fragment } from 'react';
import Bands from './Bands';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import EventsList from './EventsList';

class FavoriteBandsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: false,
            message: undefined
        }
        this.handleAlert = this.handleAlert.bind(this);
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
    render() {
        return (
            <Fragment>
                {
                    this.state.alert &&
                    <div class="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>

                }
                <Container>
                    <h1>Favorite Bands</h1>
                    <EventsList alertFunction={this.handleAlert} />
                </Container>
            </Fragment>
        )
    }
};

export default FavoriteBandsList;