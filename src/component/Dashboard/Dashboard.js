import React, { Component } from 'react';

import House from '../House/House';


export default class Dashboard extends Component {
    render() {

        return (
            <div>
                <p>Dashboard</p>
                <button 
                ng-href='/#/wizard'
                >Add New Property</button>
                <House />
            </div>
        )
    }
}