import { useRef, useEffect } from "react";
import "../../styles/flyingBird/FlyingBird.css";
import gifBird from "../../assets/gifs/eiMEkEK4T.gif";

const FlyingBirds = () => {
  const birdContainer = useRef<HTMLDivElement>(null);
  const birdContainerTwo = useRef<HTMLDivElement>(null);
  const birdContainerThree = useRef<HTMLDivElement>(null);

  const updatePositionBird = () => {
    const newTop = Math.floor(Math.random() * 20);
    if (birdContainer.current) {
      birdContainer.current.style.top = `${newTop}vh`;
    }
  };

  const updateAnimation = () => {
    const newTop = Math.floor(Math.random() * 20);
    if (birdContainerThree.current) {
      birdContainerThree.current.style.top = `${newTop}vh`;
    }
  };

  const updateTopAndAnimation = () => {
    const newTop = Math.floor(Math.random() * 30);
    if (birdContainerThree.current) {
      birdContainerThree.current.style.top = `${newTop}vh`;
    }
  };

  useEffect(() => {
    if (birdContainer.current) {
      birdContainer.current.addEventListener(
        "animationiteration",
        updatePositionBird
      );
    }
    if (birdContainerTwo.current) {
      birdContainerTwo.current.addEventListener(
        "animationiteration",
        updateAnimation
      );
    }
    if (birdContainerThree.current) {
      birdContainerThree.current.addEventListener(
        "animationiteration",
        updateTopAndAnimation
      );
    }
    return () => {
      if (birdContainer.current) {
        birdContainer.current.removeEventListener(
          "animationiteration",
          updatePositionBird
        );
      }

      if (birdContainerTwo.current) {
        birdContainerTwo.current.removeEventListener(
          "animationiteration",
          updateAnimation
        );
      }
      if (birdContainerThree.current) {
        birdContainerThree.current.removeEventListener(
          "animationiteration",
          updateTopAndAnimation
        );
      }
    };
  }, []);

  updateAnimation();
  updateTopAndAnimation();

  return (
    <>
      <div className="bird-container" ref={birdContainer}>
        <img src={gifBird} alt="bird"></img>
      </div>
      <div className="bird-container_two" ref={birdContainerTwo}>
        <img src={gifBird} alt="bird"></img>
      </div>
      <div className="bird-container_three" ref={birdContainerThree}>
        <img src={gifBird} alt="bird"></img>
      </div>
    </>
  );
};

export default FlyingBirds;
