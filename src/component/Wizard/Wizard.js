import React from 'react';
import { Route } from 'react-router-dom';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import { connect } from 'react-redux';
import { clear } from '../../ducks/reducer';

function Wizard(props)  {
        return (
            <div>
                <div>
                    <h2>Add New Listing</h2>
                        <Route component={StepOne} path='/wizard/step1' />
                        <Route component={StepTwo} path='/wizard/step2' />
                        <Route component={StepThree} path='/wizard/step3' />

                        <button onClick={ () => {
                            props.clear();
                            props.history.push('/')
                            }}> Cancel </button>
            </div>
        </div>
            
    )
}
export default  connect(null, { clear })(Wizard);