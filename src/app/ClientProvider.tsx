"use client"; // This file handles client-side logic

import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider activeChain="ethereum"> {/* Specify your chain */}
      {children}
    </ThirdwebProvider>
  );
}
