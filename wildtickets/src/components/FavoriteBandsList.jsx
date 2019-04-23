import React, { Fragment } from 'react';
import Bands from './Bands';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

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
        //console.log("toto!");
        //e.preventDefault();
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
                    <Row className='scrolling-wrapper-flexbox grid grid-xs--scroll grid-xs-2--scroll'>
                        <Bands className='card' alertFunction={this.handleAlert} />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                        <Bands className='card' />
                    </Row>
                </Container>
            </Fragment>
        )
    }
};

export default FavoriteBandsList;