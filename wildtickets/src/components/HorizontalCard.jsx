import React from 'react';
import {
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Col,
    Row
} from 'reactstrap';
import { Heart } from 'react-feather';
import Background from '../background_image.jpg';

class HorizontalCard extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { name, avatar } = this.props;
        return (

            <div className="grid__item horizontalCard">
                <Card>
                    <Row>
                        <Col>
                            <CardBody className="horizontal-text-card-left">
                                <CardTitle>
                                    <h4 className="ellips-title">{name}</h4>
                                </CardTitle>
                                <Heart className="heart-little-card" />
                                <Button className="discover-btn">DISCOVER</Button>
                            </CardBody>
                        </Col>
                        <Col>
                            <div className="img-container">
                                <CardImg className="obliqueVertical-img" style={{
                                    backgroundImage: `url(${Background})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }} src={"https://images.sk-static.com/images/media/profile_images/artists/" + avatar + "/huge_avatar"} alt={avatar} />
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>

        )
    }
};

export default HorizontalCard;