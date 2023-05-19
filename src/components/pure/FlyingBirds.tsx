import { useRef, useEffect, useState } from "react";
import "../../styles/flyingBird/FlyingBird.css";
import gifBird from "../../assets/gifs/eiMEkEK4T.gif";

const FlyingBirds = () => {
  const birdContainer = useRef<HTMLDivElement>(null);
  const birdContainerTwo = useRef<HTMLDivElement>(null);
  const birdContainerThree = useRef<HTMLDivElement>(null);
  const [firstAnimation, setFirstAnimation] = useState({
    first: true,
    second: true,
  });

  const updateBirdOne = () => {
    const newTop = Math.floor(Math.random() * 70);
    setFirstAnimation({ ...firstAnimation, first: false });
    if (birdContainer.current) {
      birdContainer.current.style.top = `${newTop}vh`;
    }
  };

  const updateBirdTwo = () => {
    const newTop = Math.floor(Math.random() * 50);
    console.log("called");
    if (birdContainerTwo.current) {
      birdContainerTwo.current.style.top = `${newTop}vh`;
      setFirstAnimation({ ...firstAnimation, second: false });
    }
  };

  const updateBirdThree = () => {
    const newTop = Math.floor(Math.random() * 80);
    if (birdContainerThree.current) {
      birdContainerThree.current.style.top = `${newTop}vh`;
    }
  };

  useEffect(() => {
    if (birdContainer.current) {
      birdContainer.current.addEventListener(
        "animationiteration",
        updateBirdOne
      );
    }
    if (birdContainerTwo.current) {
      birdContainerTwo.current.addEventListener(
        "animationiteration",
        updateBirdTwo
      );
    }
    if (birdContainerThree.current) {
      birdContainerThree.current.addEventListener(
        "animationiteration",
        updateBirdThree
      );
    }
    return () => {
      if (birdContainer.current) {
        birdContainer.current.removeEventListener(
          "animationiteration",
          updateBirdOne
        );
      }

      if (birdContainerTwo.current) {
        birdContainerTwo.current.removeEventListener(
          "animationiteration",
          updateBirdTwo
        );
      }
      if (birdContainerThree.current) {
        birdContainerThree.current.removeEventListener(
          "animationiteration",
          updateBirdThree
        );
      }
    };
  }, [firstAnimation]);

  return (
    <>
      <div className="bird-container" ref={birdContainer}>
        <img src={gifBird} alt="bird"></img>
      </div>
      {!firstAnimation.first && (
        <div className="bird-container_two" ref={birdContainerTwo}>
          <img src={gifBird} alt="bird"></img>
        </div>
      )}
      {!firstAnimation.second && (
        <div className="bird-container_three" ref={birdContainerThree}>
          <img src={gifBird} alt="bird"></img>
        </div>
      )}
    </>
  );
};

export default FlyingBirds;
