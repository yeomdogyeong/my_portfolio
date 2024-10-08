import { useState, useEffect } from "react";
import "./Card.css";

interface CardProps {
  isFlipped: boolean;
  frontImage: string;
  frontDescription: string;
  description: Description;
  gitLink?: string;
  demoLink?: string;
}

interface Description {
  title: string;
  subtitle: string;
  tech: string;
  work: string;
}

export const Card: React.FC<CardProps> = ({
  isFlipped,
  frontImage,
  frontDescription,
  description,
  gitLink,
  demoLink,
}) => {
  const [localFlipped, setLocalFlipped] = useState(false);

  const handleClick = () => {
    setLocalFlipped(!localFlipped);
  };

  useEffect(() => {
    setLocalFlipped(isFlipped);
  }, [isFlipped]);

  return (
    <>
      <div
        className={`card ${
          localFlipped ? "flipped" : ""
        } flex items-end justify-center`}
        onClick={handleClick}
        // style={{ fontFamily: "Dongle" }}
      >
        <div className="front flex items-center justify-center m-4 p-4 rounded-lg w-1/2 md:w-1/2 h-2/3">
          <img src={frontImage} alt="front" className="rounded-lg" />
          <span>{frontDescription}</span>
          <p>상세정보</p>
        </div>
        <div className="flex-col back m-4 p-4 rounded-lg w-1/2 md:w-1/2 h-2/3">
          <h1 className="flex justify-between">
            {description.title}
            <span className="flex ">
              {gitLink ? (
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  Git repo
                </a>
              ) : (
                <p></p>
              )}
              {demoLink ? (
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              ) : (
                <p></p>
              )}
            </span>
          </h1>
          <h2 className="subtitle">- {description.subtitle}</h2>
          <p className="description">{description.tech}</p>
          <p className="description">{description.work}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

//전체를 감싸고 있는 className은 card
//isflipped 상태에 따라 class flipped(뒤집어짐) 추가
//모두 flipped 할 수 있는것도 만들것
