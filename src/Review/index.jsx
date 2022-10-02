import React from "react";
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
          <span
            key={React.useId()}
            style={{ fontSize: 32 }}
            className="material-symbols-outlined color-primary"
          >
            star
          </span>
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
