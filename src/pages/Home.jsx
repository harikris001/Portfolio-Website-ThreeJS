import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

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

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [playing]);

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
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!playing ? soundoff : soundon}
          alt="sound"
          onClick={() => setPlaying(!playing)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
