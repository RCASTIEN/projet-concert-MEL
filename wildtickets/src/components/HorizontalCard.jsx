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
import Background from '../background_image.jpg';

class HorizontalCard extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const{name,avatar} = this.props;
        return (
            <Col className="grid__item horizontalCard">
                <Card>
                <div className="img-container card-img-right">
                    <CardImg className="oblique-img" style={{
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }} src={"https://images.sk-static.com/images/media/profile_images/artists/" + avatar + "/huge_avatar"} alt={avatar} />
                </div>
                <CardBody>
                    <CardTitle>
                        <h4 className="ellips-title">{name}</h4>
                    </CardTitle>
                    <Heart className="heart-little-card" />
                    <Button className="discover-btn">DISCOVER</Button>
                </CardBody>
                </Card>
            </Col>
        )
    }
};

export default HorizontalCard;