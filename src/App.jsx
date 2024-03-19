import React, { useState } from "react";
import PageHeader from "./components/PageHeader";
import CountButton from "./components/CountButton";
import ResetButton from "./components/ResetButton";
import ReduceCountButton from "./components/ReduceCountButton";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  function reduceCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <PageHeader count={count} />
      <CountButton handleCount={handleCount} />
      <ReduceCountButton reduceCount={reduceCount} />
      <ResetButton resetCount={resetCount} />
    </div>
  );
}
