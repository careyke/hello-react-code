import React, { FC } from "react";

interface HelloProps {
  count: number;
}

const Hello: FC<HelloProps> = (props) => {
  return <div>hello world {props.count}</div>;
};

export default Hello;
