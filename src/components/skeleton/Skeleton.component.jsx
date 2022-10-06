import React, { useState, useLayoutEffect } from "react";

const Skeleton = () => {
  const [show, setShow] = useState(true);

  useLayoutEffect(() => {
    setShow(true);
    setTimeout(() => {
      return setShow(false);
    }, 1500);
  }, []);
  return show ? (
    <div className="border-slate-400 rounded-md p-4 max-w-sm w-full bg-slate-100 shadow-md shadow-slate-300 mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 w-full bg-slate-500 rounded"></div>
          <div className="h-2 w-4/5 bg-slate-500 rounded"></div>
          <div className="flex flex-row items-center justify-between py-3">
            <div className="h-8 w-8 bg-slate-500 rounded-xl"></div>
            <div className="h-8 w-8 bg-slate-500 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-slate-400 text-xl">No todo here</p>
  );
};

export default Skeleton;
