import React from "react";

export default function CountButton({ handleCount }) {
  return <button onClick={handleCount}>Increase count</button>;
}
