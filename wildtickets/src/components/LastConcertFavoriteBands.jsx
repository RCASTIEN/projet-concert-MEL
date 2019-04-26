import React, {Fragment} from 'react';
import Concert from './Concert';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

class LastConcertFavoriteBands extends React.Component {
    render() {
        return (
            <Fragment>
                <Container>
                <h1>Next Favorites Bands' Concert</h1>
                    <Row className='scrolling-wrapper-flexbox grid grid-xs--scroll grid-xs-2--scroll'>
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