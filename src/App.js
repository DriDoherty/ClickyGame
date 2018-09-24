import React from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json";

class App extends React.Component {
  
  state = { 
    score: 0,
    maxscore: 0,
    images: images };
  
  cardsClicked = [];

  cardClicked = id => {

    let { score, maxscore } = this.state;

    if ( this.cardsClicked.includes( id ) ) {
      score = 0;
      this.cardsClicked = [];
    } else {
      score++;
      this.cardsClicked.push(id);
    }

    if ( score > maxscore ) {
      maxscore = score;
    }

    images.sort( (a,b) => Math.random() < 0.5 ? -1 : 1);

    this.setState( {  score: score,
                      maxscore: maxscore,
                      images: images } );
  }

  render() {
    return (
      <Container>
        <Navbar score={this.state.score} maxscore={this.state.maxscore} />
        <Header />
        <div className="row mx-3 py-3">
          { this.state.images.map( image => (
              <Image  id={image.id}
                      callBack={this.cardClicked}
                      image={image.image} />)) }
        </div>
      </Container>
    );
  };

}

export default App;