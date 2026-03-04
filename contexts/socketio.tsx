"use client";

import React, { createContext } from "react";

const SocketContext = createContext(null);

export default function SocketContextProvider({ children }: { children: React.ReactNode }) {
  return <SocketContext.Provider value={null}>{children}</SocketContext.Provider>;
}
