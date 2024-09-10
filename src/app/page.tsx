"use client";
import Home from "./dynamicPages/Home";
import HomeMobile from "./dynamicPages/HomeMobile";
import { useWindowSize } from "./hooks/useWindowSize";

export default function Index() {
  const { width } = useWindowSize();

  const isMobile = width && width < 768;

  return <div>{isMobile ? <HomeMobile /> : <Home />}</div>;
}
