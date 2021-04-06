import React, { FC } from "react";

// import SuspenseOptimizationRootSuspendedWithDelay from "./suspense/SuspenseOptimizationRootSuspendedWithDelay";
// import SuspenseOptimizationRootSuspended from "./suspense/SuspenseOptimizationRootSuspended";
import SuspenseLoadingThrottle from "./suspense/SuspenseLoadingThrottle";

const App: FC = () => {
  return <SuspenseLoadingThrottle />;
};

export default App;
