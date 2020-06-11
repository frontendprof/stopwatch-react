

import React from 'react'

function BtnComponent(props) {
    return (
        <div>
            <div>
                <div 
                className="stopwatch-btn stopwatch-btn-gre"
                onClick={props.start}
                >Start</div>
            </div>
        </div>
    );
}

export default BtnComponent;
