import React, { Component } from "react";
import Container from "./components/Container";
import Box from "./components/Box";
import Characters from "./Characters";

const styles = {
  AppHeader: {
    backgroundColor: "beige",
    height: 200,
    padding: 10,
    color: "olive"
  }
};

class App extends Component {
  state = {
    charsOrder: [],
    charsClicked: [],
    topScore: 0
  };

  shuffle = order => {
    for (let i = order.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let tmp = order[i];
      order[i] = order[j];
      order[j] = tmp;
    }
  };

  constructor() {
    super();

    let order = [];
    for (let i = 0; i < Characters.length; i++) {
      order.push(i);
    }
    this.shuffle(order);
    this.state.charsOrder = order.slice();
  }

  onClick = charNr => {
    let order = this.state.charsOrder.slice();
    this.shuffle(order);
    this.setState({ charsOrder: order });

    let clicked = this.state.charsClicked.slice();
    const repeatedChar = clicked.includes(charNr);

    if (repeatedChar) {
      this.setState({
        charsClicked: []
      });
      return;
    }

    clicked.push(charNr);
    const score = clicked.length;
    if (score >= this.state.topScore) {
      this.setState({ topScore: score });
    }

    if (score === Characters.length) {
      this.setState({
        charsClicked: []
      });
    } else {
      this.setState({
        charsClicked: clicked.slice()
      });
    }
  };

  render() {
    return (
      <div className="text-center">
        <header style={styles.AppHeader}>
          <h1>Clicky Game</h1>
          <h1>
            Score: {this.state.charsClicked.length} <span> | </span> Top Score:{" "}
            {this.state.topScore}
          </h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </header>

        <Container>
          {this.state.charsOrder.map(charNr => (
            <Box
              onClick={this.onClick}
              key={charNr}
              charNr={charNr}
              src={"assets/img/" + Characters[charNr]}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
