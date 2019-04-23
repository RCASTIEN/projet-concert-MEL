import React from 'react';
import {
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Col
  } from 'reactstrap';
  import { Heart } from 'react-feather';

class Bands extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            addToFavorite: false,
        }
    }

    handleAddToFavorite(e){
        e.preventDefault();
        this.setState({
            addToFavorite: !this.state.addToFavorite
        })
    }

    render() {
        return (
            <Col className="grid__item">
                <Card>
                <div className="img-container">
                    <CardImg className="oblique-img" top width="100%" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle><h4 className="ellips-title">Artist Name</h4></CardTitle>
                    <Heart onClick={() => {handleAddToFavorite} } className="heart-little-card" />
                    <Button className="discover-btn">DISCOVER</Button>
                </CardBody>
                </Card>
            </Col>
        )
    }
};

export default Bands;