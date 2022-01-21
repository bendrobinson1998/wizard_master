
import React from 'react'
import HomePage from './pages/Home'
import Particles from "react-tsparticles";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Mint from './pages/Mint';

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (<>
  <div style={{position: 'absolute'}}>
    <Particles
    id="tsparticles"
    className='particles-background'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: {
          value: "#fffff",
        }
       
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#6b46c1",
        },
        links: {
          color: "#6b46c1",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  /></div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="*" element={<HomePage />} />

        

      
    </Routes>
  </BrowserRouter></>
  )
}

export default App;
