import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updatePayments, clear } from '../../../ducks/reducer';
import '../Wizard.css';


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
        this.setState({
        recommended : value * 1.25,
        [prop] : value,
        })
        
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

        const buttonStyle = {
            float: 'left',
            margin: '33px 0 0 20px'
        }

        return (
            <div>
                <div className='wizard_container'>
                    <div style={{ textAlign: 'center', fontWeight: '700', margin: '20px', }}> Recommended Rent: ${this.state.recommended} </div>
                        
                        <div className=''>
                            <p> Monthly Mortgage Amount </p>
                            <input type='number'
                            style={{ width: '35vw' }}
                            value={this.state.mortgage}
                            onChange={ (e) => this.handleChange('mortgage', e.target.value)} />
                        </div>
                        
                        <div classname='wizard_input_box'>
                            <p> Desired Monthly Rent </p>
                            <input type='number'
                            style={{ width: '35vw' }}
                            value={this.state.rent}
                            onChange={ (e) => this.handleChange('rent', e.target.value)} />
                        </div>
                    </div>

                        <button className='wizard_button' onClick={this.addProperty} > Complete </button>

                        <Link to='/wizard/step2'>
                            <button className='wizard_button' style={buttonStyle} onClick={ () => {
                                this.props.updatePayments(this.state);
                            }}> Previous Step </button>
                        </Link>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { updatePayments, clear })(StepThree);