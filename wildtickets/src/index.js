import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Pages
import Concert from './Pages/Concert';
import Artist from './Pages/Artist';
import MyTickets from './Pages/MyTickets';
import Favorites from './Pages/Favorites';
import NotFound from './Pages/NotFound';

// Router 
import { BrowserRouter, Route, Switch } from "react-router-dom";

//on englobe dans BrowserRouter toute l'application
const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/concert/:concertId' component={Concert} />
            <Route path='/artist/:artistId' component={Artist} />
            <Route path='/mytickets' component={MyTickets} />
            <Route path='/favorites' component={Favorites} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
