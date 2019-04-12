import React, {Fragment} from 'react';
import Bands from './Bands';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import '../styles/main.css';

class FavoriteBandsList extends React.Component {
   constructor(props) {
       super(props)

   }
   render() {
       return (
            <Fragment>
                <Container>
                    <Row className='scrolling-wrapper-flexbox'>
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