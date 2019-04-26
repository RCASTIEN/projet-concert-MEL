import React, {Fragment} from 'react';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

class FavoriteConcertList extends React.Component {
   render() {
       return (
           <Fragment>
               <Container>
               <h1>Favorite Concerts</h1>
                   <Row className='scrolling-wrapper-flexbox grid grid-xs--scroll grid-xs-2--scroll'>

                   </Row>
               </Container>
           </Fragment>
       )
   }
};

export default FavoriteConcertList;