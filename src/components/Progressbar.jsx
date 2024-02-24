import React, { useEffect, useState } from "react";
import "./progressbar.scss";

function Progressbar({ value = 0, onComplete=()=>{} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if(value>=100){
        onComplete()
    }
  }, [value]);

  return (
    <div className="progressbar">
      <span style={{ color: percent > 47 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div style={{ width: `${percent.toFixed()}% ` }} className="progreess" />
    </div>
  );
}

export default Progressbar;
