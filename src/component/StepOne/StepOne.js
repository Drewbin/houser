import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class StepOne extends Component {
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

        // handleChange = (e) => {
        //     const updateProperty = ({
        //         [e.target.name] : e.target.value,
        //     });
        //     this.props.updateProperty(updateProperty);
        // }
        
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
            <div>
                <h2>Add New Listing</h2>
                
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

                    <Link to='/'>
                        <button >Previous Step</button>
                    </Link>

                    <Link to='/wizard/step2'>
                        <button >Next Step</button>
                    </Link>

                </form> 
            
            </div>
        )
    }
}