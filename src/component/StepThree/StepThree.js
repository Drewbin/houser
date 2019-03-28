import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updatePayments, clear } from '../../ducks/reducer';


class StepThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mortgage : 0,
            rent: 0,
            recommended: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.addProperty = this.addProperty.bind(this);
    }

    componentDidMount() {
        const { mortgage, rent } = this.props
        this.setState({ mortgage, rent })
    }

    handleChange(prop,value) {
        if (prop === 'recommended') {
            this.setState({
                recommended : value * 1.25,
            })
        } else {
            this.setState({
                [prop] : value,
            })
        }
    }

    addProperty = (e) => {
        e.preventDefault();

        const { name, address, city, state, zipcode, image } = this.props;
        const property = { name, address, city, state, zipcode, image, ...this.state }

         axios.post( '/api/property', property ).then( res => {
            this.props.clear();
            this.props.history.push('/');
        })
    }
        

    render() {

        return (
            <div>
                <div>
                    <div>
                        <p> Monthly Mortgage Amount </p>
                        <input type='number'
                        value={this.state.mortgage}
                        onChange={ (e) => this.handleChange('mortgage', e.target.value)} />

                        <p> Desired Monthly Rent </p>
                        <input type='text'
                        value={this.state.rent}
                        onChange={ (e) => this.handleChange('rent', e.target.value)} />
                    </div>
                </div>

                    <Link to='/wizard/step2'>
                        <button onClick={ () => {
                            this.props.updatePayments(this.state);
                        }}> Previous Step </button>
                    </Link>

                    <button onClick={this.addProperty} > Complete </button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { updatePayments, clear })(StepThree);