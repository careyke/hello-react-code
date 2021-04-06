import React, { FC, Suspense } from "react";

import { wrapPromise } from "./wrapPromise";

const fetchUser = () => {
  console.log("fetch user...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch user");
      resolve("Zhoujielun");
    }, 1000);
  });
};
const fetchAge = () => {
  console.log("fetch age...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch age");
      resolve(100);
    }, 1500);
  });
};

export const fetchData = () => {
  return {
    user: wrapPromise(fetchUser()),
    age: wrapPromise(fetchAge()),
  };
};

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

const resource = fetchData();

const SuspenseProcess: FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading user ...</div>}>
        <User resource={resource}></User>
        <Suspense fallback={<div>Loading age ...</div>}>
          <Age resource={resource} />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default SuspenseProcess;
