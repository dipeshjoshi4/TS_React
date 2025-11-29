import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevprops) {
        console.log(`old value : ${prevprops.number}`)
        console.log(`new value : ${this.props.number}`)
        if (prevprops.number !== this.props.number) {
            console.log("Component Updated")
        }
    }

    

    render() {
        return (
            <div>
                <h2 >{this.props.number}</h2>
            </div>
        )
    }
}
