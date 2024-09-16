import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((Count) => (Count === 5 ? 0 : Count + 1));
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout
  },[count]); // Effect depends on `count`

  return <h1>I've rendered {count} times!</h1>;
}
export default Timer;
