import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const SplineViewer = () => {
  const [error, setError] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl">
        {!error ? (
          <Spline
            scene="https://my.spline.design/animatedmockupiphone14pro-3ef6120d44fac7109693f6a4d0477db2/"
            onLoad={() => console.log("Spline Loaded")}
            onError={() => setError(true)}
          />
        ) : (
          <div className="text-center text-red-500">Failed to load Spline scene.</div>
        )}
      </div>
    </div>
  );
};

export default React.memo(SplineViewer);
