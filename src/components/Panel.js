import React from 'react';
import img from '../assets/pauschtest1.jpg';

function Panel(props) {
    return (
        <div 
            className='panel'
            style={{
                backgroundColor: props.color,
                borderColor: props.isSelected ? '#3f51b5' : '#808080',
            }}
        >
            <img src={img} alt="panel"/>
        </div>
    );
}

export default Panel;