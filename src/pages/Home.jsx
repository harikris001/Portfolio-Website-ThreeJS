import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Homeinfo from "../components/Homeinfo";

import sakura from "../assets/sakura.mp3";
import { soundon, soundoff } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [playing]);

  const adjustIslandForScreenSize = () => {
    let screensScale = null;
    let screenPosition;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screensScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screensScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screensScale, screenPosition, rotation];
  };

  const adjustPlanelandForScreenSize = () => {
    let screensScale, screenPosition;
    if (window.innerWidth < 768) {
      screensScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screensScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screensScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlanelandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scalecale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!playing ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setPlaying(!playing)}
        />
      </div>
    </section>
  );
};

export default Home;
