import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class StepTwo extends Component {
    constructor() {
        super()

        this.state = {
            image : '',
        }

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange = (event) => {
        this.setState({ image : event.target.value })
    };


    render() {

        return (
            <div>
                <h2>Add New Listing</h2>
                Image: 
                <input type='text'
                value={this.state.image}
                onChange={this.handleImageChange} />

                <Link to='/wizard/step1'>
                    <button >Previous Step</button>
                </Link>

                <Link to='/wizard/step3'>
                    <button >Next Step</button>
                </Link>


            </div>
        )
    }
}