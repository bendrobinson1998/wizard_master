import React from "react";

import Hero from "../components/Hero";

import Legendary from "../components/Legendary";
import Roadmap from "../components/Roadmap";
import Token from "../components/Token";
import Metaverse from "../components/Metaverse";
import Launchpad from "../components/Launchpad";
import Team from "../components/Team";

export default function HomePage() {
  return (
    <div className="app">
      <Hero />
      <Legendary />
      <Metaverse />
      <Launchpad />
      <Token />
      <Roadmap />
      <Team />
    </div>
  );
}
