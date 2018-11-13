import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

import friends from "./friends.json";
import "./App.css";
import Jumbotron from "./components/Jumbotron";

  class App extends Component {

    state = {
      friends: friends,
      score: 0,
      highScore: 0,
      alert: "Start."
    };
  
    // When the component mounts, load the cards to be displayed
    componentDidMount() {
      this.randomizeCards();
      let friends = this.state.friends;
      for( var i = 0; i < friends.length; i++){
        friends[i].clicked = false;
      };
      this.setState({friends: friends});
    }
  
     // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 });
    };

    randomizeCards = () => {
      const currentCards = this.state.friends.slice();
      let newIndex = this.state.friends.length;
      let randomIndex = 0;
      let shuffledCards = {};
  
      // Assign new indices to the cards to shuffle them
      while (newIndex) {
        randomIndex = Math.floor(Math.random() * newIndex--);
        shuffledCards = currentCards[newIndex];
        currentCards[newIndex] = currentCards[randomIndex];
        currentCards[randomIndex] = shuffledCards;
      }
      this.setState({
        friends: currentCards,
      });
      return friends;
    }
  
    // Return score to zero and all cards to a "clicked" value of false.
    resetGame = () => {
      const resetCards = this.state.friends.map(friend => {
        friend.clicked = false;
        return friend;
      });
      this.setState({
        score: 0,
        friend: resetCards
      });
    }
  
  //When a card is clicked... (takes in the id)
    handleBtnClick = (id) => {
      console.log(id);
      const newState = { ...this.state };
      const chosenCard = newState.friends.map(chosen => {
        if (chosen.id === id) {
          
          //If the card has not been clicked...
          if (chosen.clicked === false) {
            // Alert user and shuffle cards
            this.setState({ alert: "You did it!" });
            chosen.clicked = true;
            //Increment score by 1
            this.handleIncrement();

            //Check highscore against current score and update
          if (newState.score > newState.highScore) {
            this.setState({ highScore: newState.score + 1 });
          }

          //If the correct answer is the final guess, the user wins. Reset game
          if ((newState.score + 1) === newState.friends.length) {
            this.setState({ alert: "WIN" });
            this.resetGame();
          }

         } else if
          // If the card has already been clicked...
          (chosen.clicked === true) {
            // Alert user the card has already been clicked, reset the game
            this.setState({ alert: "No! You Lost !!! LOOOSERRR !!!!",highScore: newState.highScore });
            this.resetGame();
          };
        }
        return chosen;
      })

      //Update the chosen card and shuffle the cards
      this.setState({ friends: chosenCard });
      this.randomizeCards();
    }


  render() {
    return (
      <Wrapper>
        <Navbar
        score={this.state.score}
        highScore={this.state.highScore}
        alert={this.state.alert}
        />
        <Jumbotron />
        {this.state.friends.map(friend => (
          <FriendCard
            handleBtnClick={this.handleBtnClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;