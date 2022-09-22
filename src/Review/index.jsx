import { Star } from "@mui/icons-material";
import { Typography } from "@mui/material";
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
          <Star
            key={idx}
            style={{ paddingRight: 8 }}
            fontSize="large"
            htmlColor="#ffc400"
          />
        ))}
      </div>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="caption">
        {author} - {date}
      </Typography>
      <Typography style={{ paddingTop: 10 }} variant="body2">
        {review}
      </Typography>
    </>
  );
};
