import React from "react";

import Hero from "./Hero";

import Legendary from "./Legendary";
import Roadmap from "./Roadmap";
import Token from "./Token";
import Metaverse from "./Metaverse";
import Team from "./Team";

import Discord from "./Discord";
import Launchpad from "./Launchpad";
import Particle from "../accessories/Particles";

export default function HomePage() {
  return (
    <div className="app">
      <Hero />
      <Particle />
      <Legendary />
      <Metaverse />
      <Launchpad />
      <Discord />
      <Token />
      <Roadmap />
      <Team />
    </div>
  );
}
