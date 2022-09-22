import React, { Suspense } from "react";
import { loadContent, loadReviews } from "../../server/dal/api";
import { AppWrapper } from "../AppWrapper";
import { DataProvider } from "../Contexts/DataContext";
import { CoffeeLoader } from "../Coffee/CoffeeLoader";
import { ReviewListLoader } from "../Coffee/ReviewList/ReviewListLoader";
const ReviewList = React.lazy(() => import("../Coffee/ReviewList"));
const Coffee = React.lazy(() => import("../Coffee"));
export const App = () => (
  <AppWrapper>
    <DataProvider data={loadContent()}>
      <Suspense fallback={<CoffeeLoader />}>
        <Coffee />
      </Suspense>
    </DataProvider>
    <DataProvider data={loadReviews()}>
      <Suspense fallback={<ReviewListLoader />}>
        <ReviewList />
      </Suspense>
    </DataProvider>
  </AppWrapper>
);
