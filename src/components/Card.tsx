import { useState, useEffect } from "react";
import "./Card.css";

interface CardProps {
  isFlipped: boolean;
  frontImage: string;
  frontDescription: string;
  description: Description;
  gitLink: string;
  demoLink: string;
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
        id="project"
        className={`card ${localFlipped ? "flipped" : ""}`}
        onClick={handleClick}
        style={{ fontFamily: "Dongle" }}
      >
        <div className="front m-4 p-4 rounded-lg w-1/2 md:w-1/2 h-2/3">
          <img src={frontImage} alt="front" />
          <span>{frontDescription}</span>
          <p>상세정보</p>
        </div>
        <div className="flex back m-4 p-4 border-2 border-gray-300 rounded-lg w-1/2 md:w-1/2 h-2/3">
          <article>
            <h1 className="flex">
              {description.title}
              <span className="flex ml-4">
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  git repository
                </a>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </span>
            </h1>
            <h2 className="subtitle">- {description.subtitle}</h2>
            <p className="description">{description.tech}</p>
            <p className="description">{description.work}</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Card;

//전체를 감싸고 있는 className은 card
//isflipped 상태에 따라 class flipped(뒤집어짐) 추가
//모두 flipped 할 수 있는것도 만들것
