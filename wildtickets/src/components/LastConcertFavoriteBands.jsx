import React, {Fragment} from 'react';
import Concert from './Concert';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import '../styles/main.css';

class LastConcertFavoriteBands extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Fragment>
                <Container>
                <h1>Next Favorites Bands' Concert</h1>
                    <Row className='scrolling-wrapper-flexbox'>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                        <Concert className='card'/>
                    </Row>
                </Container>
            </Fragment>
        )
    }
};

export default LastConcertFavoriteBands;