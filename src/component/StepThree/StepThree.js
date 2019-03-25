import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class StepThree extends Component {
    constructor() {
        super()

        this.state = {
            mortgage : 0,
            rent: 0,
        }

        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleRentChange = this.handleRentChange.bind(this);
    }

    handleMortgageChange = (event) => {
        this.setState({ mortgage : event.target.value })
    };

    handleRentChange = (event) => {
        this.setState({ rent : event.target.value })
    };

    backToDashboard() {
        let path = '/';
        this.props.history.push(path)
    }

    addProperty = (e) => {
        e.preventDefault();

        const { name, address, city, state, zipcode, mortgage, rent } = this.state;

         axios.post('/api/property', {
            name,
            address,
            city, 
            state, 
            zipcode,
            mortgage,
            rent,
        }).then( () => {
            this.props.history.push('/properties');
            this.backToDashboard();                
        })
    }
        

    render() {

        return (
            <div>
                <h2>Add New Listing</h2>
                Monthly Mortgage Amount: 
                <input type='text'
                value={this.state.mortgage}
                onChange={this.handleMortgageChange} />

                Desired Monthly Rent: 
                <input type='text'
                value={this.state.rent}
                onChange={this.handleRentChange} />

                <Link to='/wizard/step2'>
                    <button >Previous Step</button>
                </Link>

                <button onClick={this.addProperty} >Complete</button>
            </div>
        )
    }
}