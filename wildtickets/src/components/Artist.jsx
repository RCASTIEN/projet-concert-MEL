import React, { Component, Fragment } from 'react';
import Background from '../images/background_image.jpg';

const formatDate = (paramDate) => {
    let setDate = paramDate;
    let regex = /^2019-/g;
    setDate = setDate.replace(regex, '');
    regex = /-/g;
    return setDate = setDate.replace(regex, '/');
  }

class Artist extends Component{

        render() {

          const{name,venue,date,avatar} = this.props;
          return (  
            <Fragment>
            <img style={{
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} src={"https://images.sk-static.com/images/media/profile_images/artists/" + avatar + "/huge_avatar"} alt={avatar} />
            <p>{name}</p>
            <p>@ {venue}</p>
            <p>{formatDate(date)}</p>
            
        </Fragment>
          )}}


export default Artist ;