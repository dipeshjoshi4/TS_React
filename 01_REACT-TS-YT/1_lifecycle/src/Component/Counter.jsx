import React, { Component } from 'react'

export default class Counter extends Component {


    componentDidUpdate(prevprops) {
        console.log(prevprops.number)
        console.log(this.props.number)
        if (prevprops.number !== this.props.number) {
            console.log("component updated")
        }
    }


    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>

            </div>
        )
    }
}


//here prevstate also could be parameter but here at this point we dont need
// componentDidUpdate(prevprops,prevstate){}