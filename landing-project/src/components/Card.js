import React, { Component } from 'react';
import style from "./Card.module.css"
import down from "../images/down.svg"
import up from "../images/up.svg"

class Card extends Component {
    constructor(){
        super()
        this.state ={
            counter : 0
        }
    }
    upHandler =()=>{
        this.setState(prevState =>({
            counter:prevState.counter +1
        }))
    }
    downHandler =()=>{
        if (this.state.counter>=1) {
            this.setState(prevState =>({
                counter:prevState.counter -1
            }))
        }
      
    }
    render() {
        const {image,name,cost} = this.props;
        const {counter} =this.state
        return (
            <div className={style.container}>
                <img src={image} alt="Phones"  />
                <h3>{name}</h3>
                <p>{cost}{counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])}$`: ""}</p>
                <div className={style.counter}>
                  <img src={up} alt="arrow" onClick={this.upHandler}/>
                  <span>{counter}</span>
                  <img className={!counter && style.deactive} src={down} alt="arrow" onClick={this.downHandler}/>  
                </div>
            </div>
        );
    }
}

export default Card;