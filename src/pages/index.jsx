import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home";
import Posts from "./posts";
import NotFound from "./notfound";
import Signup from "./signup";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter;
