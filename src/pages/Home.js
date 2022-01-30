import React from "react";

import Hero from "../components/page_sections/Hero";
import Navbar from "../components/page_sections/Navbar";
import Legendary from "../components/page_sections/Legendary";
import Roadmap from "../components/page_sections/Roadmap";
import Token from "../components/page_sections/Token";
import Metaverse from "../components/page_sections/Metaverse";
import Launchpad from "../components/page_sections/Launchpad";
import Team from "../components/page_sections/Team";

export default function HomePage() {
  return (
    <div className="app">
      <Navbar />
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
