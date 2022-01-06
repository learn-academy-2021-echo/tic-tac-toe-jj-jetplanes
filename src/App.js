import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
// let the players make decision by turns (how to make that works) 
//every click , there is a different pic show up X or O
// how to win ---> winning rules (WINNING_COMBINATIONS)
// 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      player_1: false,
      number: 9
    }
  }

  winningRule = () => {
    const Winning_Combo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const { board } = this.state

    for (let i = 0; i < Winning_Combo.length; i++) {
      // console.log(option1);
      if (board[Winning_Combo[i][0]] === "❌" && board[Winning_Combo[i][1]] === "❌" && board[Winning_Combo[i][2]] === "❌") {
        //console.log(Winning_Combo[i][0] === "❌" && Winning_Combo[i][1] === "❌" && Winning_Combo[i][2] === "❌"); ===> still gives false

        alert("🎊 Player 1 won 🎊")
        return "player 1 won"

      } else if (board[Winning_Combo[i][0]] === "⭕️" && board[Winning_Combo[i][1]] === "⭕️" && board[Winning_Combo[i][2]] === "⭕️") {
        alert("🎊 Player 2 won 🎊")
        return "player 2 won"

      }
    }
  }
  handleGamePlay = (index) => {

    const { board, number } = this.state

    if (board[index] === "⭕️" || board[index] === "❌") {
      alert("spot already taken")
    }
    else if (number % 2 === 0) {
      board[index] = "⭕️"
      this.setState({ board: board })
      this.setState({ number: number - 1 })
      this.setState({ player_1: !this.state.player_1 })
      console.log("player 1's turn,You are in the " + this.state.board[index]);
    }
    else {
      board[index] = "❌"
      this.setState({ board: board })
      this.setState({ number: number - 1 })
      this.setState({ player_1: !this.state.player_1 })
      console.log("player 2's turn, You are in the " + this.state.board[index]);
    }
    this.winningRule()
  }
  test = (index) => {
    if (this.state.board[0] === "❌" && this.state.board[1] === "❌" && this.state.board[2] === "❌") {
      alert("Trying")
    }
  }

  render() {
    console.log(this.state.crossLocation)

    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
          {this.state.board.map((value, index) => {
            return (
              <Square
                value={value}
                key={index}
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App