import React from 'react';

import './House.css';


export default function House (props) {

    const { id, name, address, city, state, zipcode, image, mortgage, rent } = props.property;
            
    return (
        <div className='House'>
            <div className='detail_box'>
                <div className='property_image' style={{ backgroundImage: `url('${image}')` }}></div>
            </div>
            <div className='detail_box'>
                <p> Property Name: {name} </p>
                <p> Address: {address} </p>
                <p> City: {city} </p>
                <p> State: {state} </p>
                <p> Zip: {zipcode} </p>
            </div>
            <div className='detail_box'>
                <p> Monthly Mortgage: {mortgage} </p>
                <p> Desired Rent: {rent} </p>
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII=" alt='delete button' className='delete_button'onClick={() => props.deleteProperty(id)} /> 
        </div>
    )
}
