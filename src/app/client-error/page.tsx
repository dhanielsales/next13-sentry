"use client";

import { useState } from "react";

export default function Page() {
  const [n, setN] = useState(0);

  if (n > 5) {
    throw new Error("Client Error");
  }

  return (
    <main>
      <h1>Client Error</h1>
      <p>{n}</p>
      <p>Error if N is bigger then 5</p>

      <button onClick={() => setN((n) => n + 1)}>Increment</button>
    </main>
  );
}
