import React, { FC, Suspense, useState } from "react";

import { fetchData, fetchDataSecond } from "./fakeApi";
import classes from "./index.module.less";

interface Props {
  resource: ReturnType<typeof fetchData>;
}

const User: FC<Props> = ({ resource }) => {
  const user = resource.user.read() as string;
  return <h1>{user}</h1>;
};

const Age: FC<Props> = ({ resource }) => {
  const age = resource.age.read() as number;
  return <div>{age}</div>;
};

const App: FC = () => {
  const [resource, setResource] = useState(() => fetchData());

  const handleClick = () => {
    setResource(fetchDataSecond());
  };

  return (
    <div className={classes.container}>
      <button onClick={handleClick}>切换请求</button>
      <Suspense fallback={<div>Loading user ...</div>}>
        <User resource={resource}></User>
        <Suspense fallback={<div>Loading age ...</div>}>
          <Age resource={resource} />
        </Suspense>
      </Suspense>
      <div>
        {Array.from(new Array(1000)).map((_, index) => {
          return <p key={index}>{index}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
