import React, { FC, Suspense, useState } from "react";

import { wrapPromise } from "../suspense/wrapPromise";

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
    }, 1000);
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

const UseTransitionProcess: FC = () => {
  const [resource, setResource] = useState(() => fetchData());
  const [
    startTransition,
    isPending,
  ] = (React as CommonObject).unstable_useTransition();

  const handleClick = () => {
    startTransition(() => setResource(fetchDataSecond()));
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "loading..." : "切换请求"}
      </button>
      <Suspense fallback={<div>Loading user ...</div>}>
        <User resource={resource}></User>
      </Suspense>
    </div>
  );
};

export default UseTransitionProcess;
