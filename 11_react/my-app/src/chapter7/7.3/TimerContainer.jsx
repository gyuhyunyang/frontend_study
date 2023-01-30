import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const [showTimer, setShowTimer] = useState(false);
  
  return (  
    <div>
      {showTimer && <Timer />}
      <button 
        onClick={() => setShowTimer(!showTimer)}
      >
        On/Off 토글
      </button>
    </div>
  );
}

export default TimerContainer;