

import React from 'react'

function BtnComponent(props) {
    return (
        <div>
            <div>
                
                {(props.status===0)?
                <button className="stopwatch-btn stopwatch-btn-gre"
                onClick={props.start}>Start</button> : ""
                }


                {(props.status===1)?
                <div>
                <button className="stopwatch-btn stopwatch-btn-red"
                onClick={props.stop}>Stop</button>

                <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={props.restart}>Restart</button>
                </div>:""}
                
            </div>
        </div>
    );
}

export default BtnComponent;
