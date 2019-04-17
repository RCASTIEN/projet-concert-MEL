import React, {Fragment} from 'react';
import Container from 'reactstrap/lib/Container';
import EventsList from './EventsList';

class FavoriteBandsList extends React.Component {
   constructor(props) {
       super(props)

   }
   render() {
       return (
            <Fragment>
                <Container>
                    <h1>Favorite Bands</h1>
                    <EventsList />
                </Container>
            </Fragment>
       )
   }
};

export default FavoriteBandsList;