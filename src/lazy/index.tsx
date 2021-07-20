import React, { Suspense, useState } from "react";

const LazyApp = React.lazy(() => {
  const p = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 3000);
  });
  return p.then(() => {
    return import("./Hello");
  });
});

const LazyTest = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <span>say</span>
      <Suspense fallback={"loading..."}>
        <LazyApp count={count} />
      </Suspense>
    </div>
  );
};

export default LazyTest;
