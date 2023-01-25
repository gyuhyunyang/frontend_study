import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContaioner(params) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>나타나라</button>
      <button onClick={() => setIsVisible(true)}>사라저라</button>
      {isVisible && <EffectSummary/> }
    </div>
  );
}

export default EffectContaioner;