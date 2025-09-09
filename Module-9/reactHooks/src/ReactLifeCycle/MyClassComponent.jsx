import React, { Component } from 'react'

export default class MyClassComponent extends Component {

    constructor(props) {
        super(props);  //pass this props to this Component Constructor 
        this.state = { count: 0 };
        console.log("1️⃣Constructore:Intial Setup")
    }

    componentDidMount() {
        console.log("3️⃣componentDidMount = Component Added To Dom First Time")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("4️⃣componentDidUpdate: when state/props Chnage", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("5️⃣componentWillUnmount:componenet remove from DOM ")
    }

    render() {
        console.log("2️⃣Render=UI Render")
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>Add By One</button>
            </div>
        )
    }
}
