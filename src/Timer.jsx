import React from 'react';
import {useState} from "react";

export default function Timer(){
   let intervalID = React.useRef(null);
   const [counter, setCounter] = useState(0);

   function incrementCount(prevCounter){
      return prevCounter + 1
   }

   function Count(){
      setCounter(incrementCount)
      console.log(counter)
      return(counter)
   }

   function Start(){
      intervalID.current = setInterval(Count, 1000);
   }

   function Stop(){
      clearInterval(intervalID.current);
   }

   function Buttons(){
      return(
         <div>
            <button onClick={Start}
            id="start" style={{backgroundColor: 'green'}}>Start</button>

            <button onClick={Stop}
            id="stop" style={{backgroundColor: 'red'}}>Stop</button>

            {/* <button onClick={}
            id="reset"  style={{backgroundColor: 'yellow'}}>Reset</button> */}
         </div>
      )
   }
   return(
      <div>
         <counter/>
         <Buttons/>
      </div>
   )
}