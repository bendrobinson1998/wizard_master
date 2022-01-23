import React from "react";

import Hero from "../components/Hero";

import Navbar from "../components/Navbar";
import Legendary from "../components/Legendary";
import Roadmap from "../components/Roadmap";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <Legendary />
      <Roadmap />
    </>
  );
}
