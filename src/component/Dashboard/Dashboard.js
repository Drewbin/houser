import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import House from '../House/House';


export default class Dashboard extends Component {



    render() {

        return (
            
            <div>
                <p>Dashboard</p>
                    <Link to='/wizard'>
                        <button type = 'button'>Add New Property</button>
                    </Link>
                <House />
            </div>
        )
    }
}