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
                    <Row>
                        <Bands />
                        <Bands />
                        <Bands />
                        <Bands />
                    </Row>
                </Container>
            </Fragment>
        )
    }
};

export default FavoriteBandsList;