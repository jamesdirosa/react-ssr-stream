import React from "react";
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
      <h6>{title}</h6>
      <p>
        {author} - {date}
      </p>
      <p style={{ paddingTop: 10 }}>{review}</p>
    </>
  );
};
