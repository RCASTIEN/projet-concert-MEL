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
import "../styles/Heart.css"
import Background from '../background_image.jpg';


class Bands extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addToFavorite: false,
        }
        this.handleAddToFavorite = this.handleAddToFavorite.bind(this);
    }

    handleAddToFavorite(e) {
        e.preventDefault();
        this.setState({
            addToFavorite: !this.state.addToFavorite,
        }, () => {
            this.props.alertFunction(this.state.addToFavorite ? "This band was added to your favorites !" : "This band was removed from your favorite.");
        }
        );

    }

    render() {
        const { name, avatar } = this.props;
        return (
            <React.Fragment>
                <Col className="grid__item">
                    <Card>
                        <div className="img-container">
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
                            <Heart onClick={this.handleAddToFavorite} className={this.state.addToFavorite ? "heart-filled" : "heart-little-card"} />
                            <Button className="discover-btn">DISCOVER</Button>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }
};

export default Bands;