import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer(params) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>나타나라</button>
      <button onClick={() => setIsVisible(false)}>사라져라</button>
      {isVisible && <EffectSummary />}
    </div>
  );
}

export default EffectContainer;