import React from "react";
import { ReactComponent as ReviewStarIcon } from "../../assets/img/review-star.svg";
import { Paragraph } from "../ui/Text";

interface ReviewProps {
  rating: number;
  reviewCount: number;
}

const Review: React.FC<ReviewProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex flex-col pb-1.5">
      <Paragraph className="text-dark text-lg font-jakarta leading-7 font-semibold">
        Our Happy Traders
      </Paragraph>
      <div className="flex items-center justify-start">
        <ReviewStarIcon />
        <div className="flex ml-2">
          <Paragraph className="text-dark text-base font-jakarta leading-7 font-medium">
            {rating}
          </Paragraph>
          <Paragraph className="text-gray text-base font-jakarta leading-7 font-medium ml-1">
            ({reviewCount} reviews)
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Review;
