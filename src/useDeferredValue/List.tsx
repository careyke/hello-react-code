import React, { FC, memo } from "react";

const getLis = (key: string) => {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    arr.push(<li key={i}>{key}</li>);
  }
  return arr;
};

interface ListProps {
  value: string;
}

const List: FC<ListProps> = (props) => {
  const { value } = props;

  return <ul>{value ? getLis(value) : null}</ul>;
};

export default memo(List);
