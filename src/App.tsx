import React, { FC } from "react";

// import SuspenseOptimizationRootSuspendedWithDelay from "./suspense/SuspenseOptimizationRootSuspendedWithDelay";
// import SuspenseOptimizationRootSuspended from "./suspense/SuspenseOptimizationRootSuspended";
// import SuspenseLoadingThrottle from "./suspense/SuspenseLoadingThrottle";

// import UseTransitionProcess from "./useTransition/UseTransitionProcess";

// import UseDeferredValueProcess from "./useDeferredValue/index";

import Lazy from "./lazy/index";

const App: FC = () => {
  return <Lazy />;
};

export default App;
