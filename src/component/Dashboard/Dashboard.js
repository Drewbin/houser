import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            properties : [],
        }

        this.deleteProperty = this.deleteProperty.bind(this);
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

    deleteProperty(id) {
        axios.delete( `/api/property/${id}` ).then(res => {
            this.showProperties();
        });
    }

    render() {
        const propList = this.state.properties.map((property, index) => (
        <House property={property} key={index} deleteProperty={this.deleteProperty} />))

        return (
            
            <div>
                <p>Dashboard</p>
                    <Link to='/wizard/step1'>
                        <button type = 'button'>Add New Property</button>
                    </Link>
                    {propList}
            </div>
            
            
        )
    }
}