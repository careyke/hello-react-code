import React, { FC, Suspense } from "react";

import { fetchData } from "./fakeApi";
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

const data = fetchData();

const App: FC = () => {
  return (
    <div className={classes.container}>
      <Suspense fallback={<div>Loading user ...</div>}>
        <User resource={data}></User>
        <Suspense fallback={<div>Loading age ...</div>}>
          <Age resource={data} />
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
