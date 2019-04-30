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
import { Save } from 'react-feather';
import Background from '../background_image.jpg';

const formatDate = (paramDate) => {
    let setDate = paramDate;
    let regex = /^2019-/g;
    setDate = setDate.replace(regex, '');
    regex = /-/g;
    return setDate = setDate.replace(regex, '/');
}

class HorizontalCard extends React.Component {
    render() {
        const { name, date, venue, avatar, fav } = this.props;
        return (

            <div className="grid__item horizontalCard">
                <Card>
                    <Row>
                        <Col>
                            <CardBody className="horizontal-text-card-left">
                                <CardTitle>
                                    <h4 className="ellips-title">{name}</h4>
                                    <p className="text-muted">{venue}-{formatDate(date)}</p>
                                </CardTitle>
                                <Save className="heart-little-card" />
                                <a href={`/concert/${fav}`}>
                                    <Button className="horizontal-discover-btn">DISCOVER</Button>
                                </a>
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