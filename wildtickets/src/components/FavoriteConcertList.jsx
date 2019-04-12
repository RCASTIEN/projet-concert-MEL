import React, {Fragment} from 'react';
import Concert from './Concert';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import '../styles/main.css';

class FavoriteConcertList extends React.Component {
   constructor(props) {
       super(props)

   }
   render() {
       return (
           <Fragment>
               <Container>
               <h1>Favorite Concerts</h1>
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

export default FavoriteConcertList;