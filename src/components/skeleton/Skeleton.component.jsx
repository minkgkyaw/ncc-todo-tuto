import React from "react";

const Skeleton = () => {
  return (
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
  );
};

export default Skeleton;
