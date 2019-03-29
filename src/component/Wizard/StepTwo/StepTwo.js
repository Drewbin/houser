import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateImage } from '../../../ducks/reducer';


class StepTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image : '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ image : value })
    }

    componentDidMount() {
        this.setState({ image: this.props.image})
    }

    render() {
        const buttonStyle = {
            float: 'left',
            margin: '33px 0 0 20px'
        }

        return (
            <div>
                <div className='wizard_container'>
                    <div className='wizard_input_box'> 
                        <p> Image URL </p>
                        <input type='text'
                        style={{ width: '33vw' }}
                        value={this.state.image}
                        onChange={ (e) => this.handleChange( e.target.value )} />
                    </div>
                </div>
                    <Link to='/wizard/step3'>
                        <button className='wizard_button' onClick={ () => {
                            this.props.updateImage(this.state.image);
                        }}> Next Step </button>
                    </Link>

                    <Link to='/wizard/step1'>
                        <button className='wizard_button' style={buttonStyle}
                            onClick={ () => {
                            this.props.updateImage(this.state.image);
                        }}> Previous Step </button>
                    </Link>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        image: state.image
    }
}

export default connect(mapStateToProps, { updateImage })(StepTwo)