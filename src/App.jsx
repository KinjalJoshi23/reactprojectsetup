import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </>
    ),
    {
      basename: '/',
    }
  );
  return <RouterProvider router={router} />;
};

export default App;
