import React, { FC } from "react";

// import SuspenseOptimizationRootSuspendedWithDelay from "./suspense/SuspenseOptimizationRootSuspendedWithDelay";
// import SuspenseOptimizationRootSuspended from "./suspense/SuspenseOptimizationRootSuspended";
// import SuspenseLoadingThrottle from "./suspense/SuspenseLoadingThrottle";

// import UseTransitionProcess from "./useTransition/UseTransitionProcess";

// import UseDeferredValueProcess from "./useDeferredValue/index";
import ConcurrentListNotUseDeferredValue from "./useDeferredValue/ConcurrentListNotUseDeferredValue";

const App: FC = () => {
  return <ConcurrentListNotUseDeferredValue />;
};

export default App;
