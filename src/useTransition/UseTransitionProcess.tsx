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
const fetchAge = () => {
  console.log("fetch age...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch age");
      resolve(100);
    }, 1500);
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
const fetchAgeSecond = () => {
  console.log("fetch age second...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetch age second");
      resolve(200);
    }, 3000);
  });
};

export const fetchData = () => {
  return {
    user: wrapPromise(fetchUser()),
    age: wrapPromise(fetchAge()),
  };
};
export const fetchDataSecond = () => {
  return {
    user: wrapPromise(fetchUserSecond()),
    age: wrapPromise(fetchAgeSecond()),
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
        <Suspense fallback={<div>Loading age ...</div>}>
          <Age resource={resource} />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default UseTransitionProcess;
