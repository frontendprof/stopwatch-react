import React, {useState} from 'react';

import DisplayComponent from './components/DisplayComponent';
import BtnComponent from './components/BtnComponent';
import './App.css';

function App() {

  const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const [interv, setInterv]=useState();
  const [status, setStatus]=useState(1);
  
  const start=()=>{
    run();
    setInterv(setInterval(run,10));
  }

  let updatedMs=time.ms;
  let updatedS=time.s;
  let updatedM=time.m;
  let updatedH=time.h;

  const run = () =>{

    if(updatedM===60){
      updatedH++;
      updatedM=0;
    }

    if(updatedS===60){
      updatedM++;
      updatedS=0;
    }

    if(updatedMs===100){
      updatedS++;
      updatedMs=0;
    }
    updatedMs++;
    return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH})
  }
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent start={start} status={status}/>

        </div>
      </div>
    </div>
  );
}

export default App;
