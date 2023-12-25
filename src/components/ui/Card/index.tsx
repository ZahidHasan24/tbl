import { H5 } from "../Heading";
import { Paragraph } from "../Text";

export interface CardProps {
  isActive: boolean;
  icon: React.ReactElement;
  imgSrc: string;
  title: string;
  description: string;
  gradientBg: string;
}

const Card: React.FC<CardProps> = ({
  isActive,
  icon,
  imgSrc,
  title,
  description,
  gradientBg,
}) => {
  const cardStyle: React.CSSProperties = {
    background: isActive ? gradientBg : "white",
  };

  return (
    <div
      className={`flex flex-col mt-5 px-5 py-8 rounded-2xl items-start relative ${
        isActive ? "active" : ""
      }`}
      style={cardStyle}
    >
      <div className="w-14 h-14 rounded-full bg-body-second flex items-center justify-center">
        {icon}
      </div>
      <img alt="HomeGridImg" src={imgSrc} className="absolute top-0 right-0" />
      <H5 className={`text-${isActive ? "white" : "dark"} mt-8`}>{title}</H5>

      <Paragraph
        className={`text-${
          isActive ? "white" : "darkLight"
        } text-base font-jakarta mt-3`}
      >
        {description}
      </Paragraph>
    </div>
  );
};

export default Card;
