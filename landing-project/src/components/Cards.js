import React, { Component } from 'react';
import styles from "./Cards.module.css"
import Card from './Card';

import note20 from "../images/note20.jpg"
import iphone13 from "../images/ipadpro.png"
import fold from "../images/zfold3.webp"
import xiaomi9 from "../images/xiaomi9.jpg"

class Cards extends Component {
    constructor(){
        super()
        this.state ={
            phoneData :[
                {image:iphone13 , name:"Ipod pro", cost:"500 $"},
                {image:note20, name:"Note 20", cost:"400 $"},
                {image:fold, name:"Z-Fold", cost:"450 $"},
                {image:xiaomi9, name:"Xiaomi 9", cost:"300 $"}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {/* <Card image={iphone13} name="Ipod pro" cost="500 $"/>
                <Card image={note20} name="Note 20" cost="400 $"/>
                <Card image={fold} name="Z-Fold" cost="450 $"/>
                <Card image={xiaomi9} name="Xiaomi 9" cost="300 $"/> */}
                {this.state.phoneData.map(phone =><Card key={phone.name} image={phone.image} name={phone.name} cost={phone.cost}/>)}
            </div>
        );
    }
}

export default Cards;