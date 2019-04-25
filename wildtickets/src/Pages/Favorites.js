import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoriteConcertList from '../components/FavoriteConcertList';
import FavoriteBandsList from '../components/FavoriteBandsList'
import LastConcertFavoriteBands from '../components/LastConcertFavoriteBands';
import {
    Container
} from 'reactstrap';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

   render() {
       return (
           <Fragment>
               <Header />
               <Container>
                   <FavoriteBandsList />
                   <FavoriteConcertList />
                   <LastConcertFavoriteBands />
               </Container>
               <Footer />
           </Fragment>
       );
   }
};

export default Favorites;