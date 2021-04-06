import React, { FC, Suspense } from "react";

import { wrapPromise } from "./wrapPromise";

const fetchUser = () => {
  console.log("fetch user...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch user");
      resolve("Zhoujielun");
    }, 300);
  });
};
const fetchAge = () => {
  console.log("fetch age...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch age");
      resolve(100);
    }, 320);
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
  const user = resource.age.read() as string;
  return <div>{user}</div>;
};

const resource = fetchData();

const SuspenseOptimizationRootSuspended: FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading user ...</div>}>
        <User resource={resource}></User>
        <Suspense fallback={<div>Loading age ...</div>}>
          <Age resource={resource} />
        </Suspense>
        <div>
          {Array.from(new Array(1000)).map((_, index) => {
            return <p key={index}>{index}</p>;
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default SuspenseOptimizationRootSuspended;
