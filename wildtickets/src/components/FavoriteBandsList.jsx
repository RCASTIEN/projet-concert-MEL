import React, {Fragment} from 'react';
import Bands from './Bands';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

class FavoriteBandsList extends React.Component {
   constructor(props) {
       super(props)

   }
   render() {
       return (
            <Fragment>
                <Container>
                <h1>Favorite Bands</h1>
                    <Row className='scrolling-wrapper-flexbox grid grid-xs--scroll grid-xs-2--scroll'>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                        <Bands className='card'/>
                    </Row>
                </Container>
            </Fragment>
       )
   }
};

export default FavoriteBandsList;