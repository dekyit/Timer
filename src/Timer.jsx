import React from "react";


export default function Timer(){
   const intervalID = React.useRef(null);
   let counter = 0;

   function Count(){
      counter++
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
         <Count/>
         <Buttons/>
      </div>
   )
}