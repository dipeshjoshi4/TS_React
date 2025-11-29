import React, { Component } from 'react'
import Counter from "./Component/Counter"
import CounterFun from './Component/CounterFun';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({ count: (this.state.count) + 1 })
  }

  componentDidMount() {
    console.log("componentDidMount : happen first time at load Data")
  }
  componentWillUnmount() {
    console.log("Class Component : on removed part it will run")
  }


  render() {
    return (
      <div>

        {/* Class Component */}
        {/* <Counter number={this.state.count} /> */}

        {/* Functional Component */}
        <CounterFun number={this.state.count} />

        {/* Wrong Way */}
        {/* <button onClick={this.increment} >ClickMe</button> */}

        {/* 1st Way */}
        {/* <button onClick={this.increment.bind(this)} >ClickMe</button> */}

        {/* 2nd way */}
        <button onClick={() => this.increment()} >ClickMe</button>

        {/* 2nd way */}

      </div>
    )
  }
}



//?make a class component with rcc

//?3 phase in react class component Lifecycle

//Before Mount you can run something on react class component for that we have method called Constructore

//component did Mount - first time load data its Mounting
//update - update 
//Component Did Unmount - that component remove called Unmounting

//render is also one lifecycle method
//browser dont understand jsx  render  and then comes concept of transpiler like bebel
// html  like code doing render and give to transpiler

//?Normal function didnt get this so seState value dont get like Wrong way so either you have to use bind or arrow function