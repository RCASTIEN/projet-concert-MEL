import React, {Fragment} from 'react';
import Concert from './Concert';
import { Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

class LastConcertFavoriteBands extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Concert />
                        <Concert />
                        <Concert />
                        <Concert />
                    </Row>
                </Container>
            </Fragment>
        )
    }
};

export default LastConcertFavoriteBands;