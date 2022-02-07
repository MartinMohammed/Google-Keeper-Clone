import React, {useState} from "react";

function Clock(){
    setInterval(updatetime, 1000);

  // starting value for state = current Local time
  // each time the code gets executed (e.g. restart)
  // the starting value will be dynamical
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  function updatetime() {
    //2. Given that you can get code to be called every second
    //using the setInterval method.
    //Can you get the time in your <h1> to update every second?

    //1. Given that you can get the current time using:
    // update state value currentTime with current local time
    setTime(new Date().toLocaleTimeString());
  }
    return (
        <h1 className="clock">{currentTime}</h1>
    )
}

export default Clock; 