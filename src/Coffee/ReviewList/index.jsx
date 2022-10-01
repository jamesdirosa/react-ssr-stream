import React from "react";
import { Review } from "../../Review";
import { useData } from "../../Contexts/DataContext";

const ReviewList = () => {
  const data = useData();
  return (
    <div style={{ paddingTop: 30 }}>
      {data.map((review, idx) => {
        return (
          <div
            key={React.useId()}
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: 10,
              padding: 10,
            }}
          >
            <Review
              author={review.name}
              date={review.date}
              key={idx}
              review={review.review}
              starCount={review.starCount}
              title={review.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
