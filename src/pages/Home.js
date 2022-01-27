import React from "react";

import Hero from "../components/Hero";

import Legendary from "../components/Legendary";
import Roadmap from "../components/Roadmap";
import Token from "../components/Token";
import Metaverse from "../components/Metaverse";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Legendary />
      <Metaverse />
      <Roadmap />
      <Token />
    </>
  );
}
