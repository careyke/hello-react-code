import React, { useState } from "react";

import List from "./List";

export default function UseDeferredValueProcess() {
  const [value, setValue] = useState("");
  const deferredValue = (React as CommonObject).unstable_useDeferredValue(
    value
  );

  const handleChange = (e: CommonObject) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <input onChange={handleChange} />
      </div>
      <div>
        <List value={deferredValue} />
      </div>
    </div>
  );
}
