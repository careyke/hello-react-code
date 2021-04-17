import React, { useState } from "react";

const getLis = (key: string) => {
  const arr = [];
  for (let i = 0; i < 100000; i++) {
    if (String(i).includes(key)) {
      arr.push(<li key={i}>{i}</li>);
    }
  }
  return arr;
};

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
        <ul>{deferredValue ? getLis(deferredValue) : null}</ul>
      </div>
    </div>
  );
}
