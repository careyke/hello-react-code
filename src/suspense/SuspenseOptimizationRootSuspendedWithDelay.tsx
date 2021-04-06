import React, { FC, Suspense, useState } from "react";

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
const fetchUserSecond = () => {
  console.log("fetch user second...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch user second");
      resolve("Zhoujielun second");
    }, 10);
  });
};

export const fetchData = () => {
  return {
    user: wrapPromise(fetchUser()),
  };
};
export const fetchDataSecond = () => {
  return {
    user: wrapPromise(fetchUserSecond()),
  };
};

interface Props {
  resource: ReturnType<typeof fetchData>;
}

const User: FC<Props> = ({ resource }) => {
  const user = resource.user.read() as string;
  return <h1>{user}</h1>;
};

const SuspenseOptimizationRootSuspendedWithDelay: FC = () => {
  const [resource, setResource] = useState(() => fetchData());

  const handleClick = () => {
    setResource(fetchDataSecond());
  };

  return (
    <div>
      <button onClick={handleClick}>切换请求</button>
      <Suspense fallback={<div>Loading user ...</div>}>
        <User resource={resource}></User>
      </Suspense>
      <div>
        {Array.from(new Array(1000)).map((_, index) => {
          return <p key={index}>{index}</p>;
        })}
      </div>
    </div>
  );
};

export default SuspenseOptimizationRootSuspendedWithDelay;
