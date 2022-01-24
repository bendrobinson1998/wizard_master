import React from "react";

import Hero from "../components/Hero";
import Particle from "../components/Particles";
import Navbar from "../components/Navbar";
import Legendary from "../components/Legendary";
import Roadmap from "../components/Roadmap";
import Token from "../components/Token";
import Metaverse from "../components/Metaverse";

export default function HomePage() {
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <Legendary />
      <Metaverse />
      <Roadmap />
      <Token />
    </>
  );
}
