import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { updateName, updateAddress, updateCity, updateState, updateZipcode } from '../../ducks/reducer'
import { connect } from 'react-redux';


class StepOne extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zipcode: '',
    //     }

        

    //     this.handleNameChange = this.handleNameChange.bind(this);
    //     this.handleAddressChange = this.handleAddressChange.bind(this);
    //     this.handleCityChange = this.handleCityChange.bind(this);
    //     this.handleStateChange = this.handleStateChange.bind(this);
    //     this.handleZipChange = this.handleZipChange.bind(this);
    //     }

    //     // handleChange = (e) => {
    //     //     const updateProperty = ({
    //     //         [e.target.name] : e.target.value,
    //     //     });
    //     //     this.props.updateProperty(updateProperty);
    //     // }
        
    //     handleNameChange = (event) => {
    //         this.setState({ name : event.target.value })
    //     };

    //     handleAddressChange = (event) => {
    //         this.setState({ address : event.target.value })
    //     };

    //     handleCityChange = (event) => {
    //         this.setState({ city : event.target.value })
    //     };

    //     handleStateChange = (event) => {
    //         this.setState({ state : event.target.value })
    //     };

    //     handleZipChange = (event) => {
    //         this.setState({ zipcode : event.target.value })
    //     };


    render() {

        const {updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props;

        return (
            <div>
                <h2>Add New Listing</h2>
                
                <form>
                    
                    Property Name: 
                    <input type='text'
                    value={this.props.name}
                    onChange={ (e) => updateName( e.target.value )} />
                    
                    Address: 
                    <input type='text'
                    value={this.props.address}
                    onChange={ (e) => updateAddress( e.target.value )} />

                    City: 
                    <input type='text'
                    value={this.props.city}
                    onChange={ (e) => updateCity( e.target.value )} />

                    State: 
                    <input type='text'
                    value={this.props.state}
                    onChange={ (e) => updateState( e.target.value )} />

                    Zip Code: 
                    <input type='number'
                    value={this.props.zipcode}
                    onChange={ (e) => updateZipcode( e.target.value )} />

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

function mapStateToProps( state ) {
    const {updateName, updateAddress, updateCity, updateState, updateZipcode } = state;

    return {
        updateName, 
        updateAddress, 
        updateCity, 
        updateState, 
        updateZipcode,
    }
}

export default connect( mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZipcode } )(StepOne);