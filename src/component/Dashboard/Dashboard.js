import React, { Component } from 'react';
import axios from 'axios';

import House from '../House/House';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            properties : [],
        }
    }

    showProperties() {
        axios.get('/api/properties').then( res => {
            this.setState({
                properties : res.data
            });
        });
    }

    componentDidMount() {
        this.showProperties();
    }

    deleteProperty = (id) => {
        axios.delete( `/api/property/${id}` ).then(res => {
            this.showProperties();
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h2> Dashboard </h2>
                    <button onClick={ () => this.props.history.push('/wizard/step1') }> Add New Property </button>
                </div>
                <div>
                    <h3> Home Listings </h3>
                    {this.state.properties.map ( property => {
                        return <House property={property} deleteProperty={this.deleteProperty} key={property.id} />
                    })}
                </div>
            </div>
        );
    }
}