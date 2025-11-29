import React, { Component } from 'react'
import Counter from './Component/Counter'
import Counter1 from './Component/Counter1'
import StateTutorial from './Component/StateTutorial'

export default class App extends Component {


  //before the load i have to define some varible then we have to use constructor
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  // componentDidMount() {
  //   console.log("componentDidMount: when the first time component render")
  // }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  componentWillUnmount() {
    console.log("componentWillUnmount:Component will remove")
  }

  render() {
    return (
      <div>
        {/* <Counter1 number={this.state.count} /> */}
        {/* <Counter number={this.state.count} /> */}
        {/* <button onClick={this.increment.bind(this)}>Increment</button> */}  {/* this one of the way to increment with es5 */}
        {/* <button onClick={() => { this.increment() }}>Increment</button> */}

        <StateTutorial />
      </div>
    )
  }
}
