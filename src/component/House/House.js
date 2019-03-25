import React, { Component } from 'react';

export default class House extends Component {
    render() {
        const { name, address, city, state, zipcode } = this.props.property;
        const deleteProperty = this.props.deleteProperty
    
        return (
            <form>
                <h4>
                    Property Name: {name}
                </h4>

                <h4>
                    Address: {address}    
                </h4>

                <h4>
                    City: {city}
                </h4>

                <h4>
                    State: {state}
                </h4>

                <h4>
                    Zip: {zipcode}
                </h4>
                <button onClick={() => deleteProperty(this.props.property.id)}>Delete</button>
            </form>
        )
    }
}