import React from "react";
import { Star } from "../UI/Icons";
import "./styles";

export const Review = ({
  starCount = 0,
  title = "",
  date = "",
  review = "",
  author = "",
}) => {
  return (
    <>
      <div>
        {[...Array(starCount)].map((key, idx) => (
          <Star
            key={React.useId()}
            style={{ fontSize: 32 }}
            className="color-primary"
          />
        ))}
      </div>
      <div className="review-title">{title}</div>
      <div className="review-author">
        {author} - {date}
      </div>
      <div className="review-body">{review}</div>
    </>
  );
};
