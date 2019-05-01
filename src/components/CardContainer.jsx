import React, { Component } from 'react'
import Card from "./Card.jsx";
import images from "../zeoImg.json";

const style= {
  row:{
    display: "flex"
  },
  score:{
    fontFamily: "sSharp",
    fontSize: "2rem"
  },
  pipe:{
    color: "#e6c400",
    fontSize: "3rem"
  },
  message: {
    fontFamily: "sSharp",
    fontSize: "2.5rem"
  }
  
}

export class CardContainer extends Component {
  state = {
    images: images,
    clickedImages: [],
    score: 0,
    high_score: 0,
    message: "",
    href: "#",
    framework: ""
  }

  //See Fisher-Yates shuffle in action! https://bost.ocks.org/mike/shuffle/
  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleClick = (id) => {
    let clickedImages = this.state.clickedImages;
    let item = images.filter(image => id === image.id);


    if(this.state.clickedImages.includes(item[0].img)){
      this.setState({images: images});
      this.setState({clickedImages: []});
      if(this.state.score > this.state.high_score){
        this.setState({high_score: this.state.score})
      }
      this.setState({score: 0 });
      this.setState({message: "RESET"});
    }
    else {
      clickedImages.push(item[0].img);
      this.setState({clickedImages: clickedImages});
      this.setState({score: this.state.score + 1 });
      this.setState({images: this.shuffle(images)})
      this.setState({message: "CORRECT"});
      this.setState({framework: item[0].img})
    }
  }

  render() {
    return (
      <div className="container" style={style.container}>
        <div>
          <span style={style.score}>
            Score: {this.state.score} <span style={style.pipe}>|</span> High Score: {this.state.high_score}
          </span>
        </div>
        <div>
          <p style={style.message}>{this.state.message}</p>
          <p>Framework: {this.state.framework}</p>
        </div>
        <div className="row" style={style.row}>
          {images.map(image => 
          <Card className="col-3"
            id={image.id} 
            key={image.id} 
            src={image.src} 
            name={image.img} 
            clicked={image.clicked}
            handleClick={this.handleClick}
          />)}
        </div>
      </div>
    )
  }
}

export default CardContainer
