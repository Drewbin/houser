import React, { Component } from 'react';

export default class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
    }

        handleNameChange = (event) => {
            this.setState({ name : event.target.value })
        };

        handleAddressChange = (event) => {
            this.setState({ address : event.target.value })
        };

        handleCityChange = (event) => {
            this.setState({ city : event.target.value })
        };

        handleStateChange = (event) => {
            this.setState({ state : event.target.value })
        };

        handleZipChange = (event) => {
            this.setState({ zipcode : event.target.value })
        };

    render() {
        return (
            <div>Add New Listing
                <form>
                    Property Name: 
                    <input type='text'
                    value={this.state.name}
                    onChange={this.handleNameChange} />
                    
                    Address: 
                    <input type='text'
                    value={this.state.address}
                    onChange={this.handleAddressChange} />

                    City: 
                    <input type='text'
                    value={this.state.cityj}
                    onChange={this.handleCityChange} />

                    State: 
                    <input type='text'
                    value={this.state.state}
                    onChange={this.handleStateChange} />

                    Zip Code: 
                    <input type='number'
                    value={this.state.zipcode}
                    onChange={this.handleZipChange} />
                </form> 
            </div>
        )
    }
}