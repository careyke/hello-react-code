const wrapPromise = (promise: Promise<unknown>) => {
  let status = "pending";
  let result: unknown;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "success":
          return result;
        case "error":
          throw result;
      }
    },
  };
};

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
