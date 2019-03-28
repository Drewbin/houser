import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateInfo } from '../../ducks/reducer'

class StepOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        });
    }

    render() {
        return (
            <div>
                <div>
                    
                    <div>
                        <p> Property Name </p>
                        <input type='text'
                        value={this.state.name}
                        onChange={ (e) => this.handleChange('name', e.target.value)} />
                    </div>

                    <div>
                        <p> Address </p>
                        <input type='text'
                        style={{ width: '33vw'}}
                        value={this.state.address}
                        onChange={ (e) => this.handleChange('address', e.target.value)} />
                    </div>

                    <div>
                        <p> City </p>
                        <input type='text'
                        value={this.state.city}
                        onChange={ (e) => this.handleChange('city', e.target.value)} />
                    </div>

                    <div>
                        <p> State </p>
                        <input type='text'
                        style= {{ width: '70px' }}
                        value={this.state.state}
                        onChange={ (e) => this.handleChange('state', e.target.value)} />
                    </div>

                    <div>
                        <p> Zip Code </p>
                        <input type='number'
                        style={{ width: '100px' }}
                        value={this.state.zipcode}
                        onChange={ (e) => this.handleChange('zipcode', e.target.value)} />
                    </div>

                </div>
                
                <button onClick={ () => {
                    this.props.updateInfo(this.state);
                    this.props.history.push('/wizard/step2')}} > Next Step </button>
            </div>
        )
    }
}

function mapStateToProps( reduxState ) {
    const {name, address, city, state, zipcode } = reduxState;

    return {
        name,
        address,
        city,
        state, 
        zipcode,
    }
}

export default connect( mapStateToProps, { updateInfo } )(StepOne);