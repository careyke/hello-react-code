import React, { FC, useEffect, useState } from "react";

const getLis = (key: string) => {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      arr.push(<li key={i}>{i}</li>);
    }
  }
  return arr;
};

interface ListProps {
  value: string;
}

const List: FC<ListProps> = (props) => {
  const { value } = props;
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    setFilterValue(value);
  }, [value]);

  return <ul>{filterValue ? getLis(filterValue) : null}</ul>;
};

export default function ConcurrentListNotUseDeferredValue() {
  const [value, setValue] = useState("");
  // const deferredValue = (React as CommonObject).unstable_useDeferredValue(
  //   value
  // );

  const handleChange = (e: CommonObject) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <input onChange={handleChange} />
      </div>
      <div>
        <List value={value} />
      </div>
    </div>
  );
}
