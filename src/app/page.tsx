"use client";
import React, { useState, useEffect } from "react";
import Home from "./dynamicPages/Home";
import HomeMobile from "./dynamicPages/HomeMobile";
import { useWindowSize } from "./hooks/useWindowSize";
import { CircularProgress } from "@mui/material";

export default function Index() {
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width) {
      setIsMobile(width < 768);
      setIsLoading(false);
    }
  }, [width]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#68EAAC]">
        <CircularProgress sx={{ color: "#000" }} />
      </div>
    );
  }

  return <div>{isMobile ? <HomeMobile /> : <Home />}</div>;
}
