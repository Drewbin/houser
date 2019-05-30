import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { clear } from '../../ducks/reducer';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import './Wizard.css'

function Wizard(props)  {
        return (
            <div className='Wizard'>
                
                <div className='wizard_header'>
                    
                    <h2 className='wizard_heading'> Add New Listing </h2>
                    
                    <button className='wizard_header_button'  onClick={ () => {
                        props.clear();
                        props.history.push('/')
                        }}> Cancel </button>
        
            </div>
                <Route component={StepOne} path={props.match.path + '/step1'} />
                <Route component={StepTwo} path={props.match.path + '/step2'} />
                <Route component={StepThree} path={props.match.path + '/step3'} />
        
        </div>
    )
}
export default  connect(null, { clear })(Wizard);