import React, { useState } from "react";
import progressContext from "./progressContext";

const ProgressState = (props) => {
  const [progress, setProgress] = useState(0);

  return (
    <progressContext.Provider value={{ progress, setProgress }}>
      {props.children}
    </progressContext.Provider>
  );
};

export default ProgressState;