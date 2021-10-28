import React, { Component } from 'react';
import style from "./Card.module.css"

class Card extends Component {
    render() {
        const {image,name,cost} = this.props;
        return (
            <div className={style.container}>
                <img src={image} alt="Phones" />
                <h3>{name}</h3>
                <p>{cost}</p>
            </div>
        );
    }
}

export default Card;