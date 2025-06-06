import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ChipsInput from "./components/assignments/ChipsInput";
import Shimmer from "./components/Shimmer";
//Chunking
//Code splitting
//Dynamic Bundling
//Lazy loading
//on Demand Loading
//dynamic import
const Grocery = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/Grocery")), 5000);
    })
);
const About = lazy(() => import("./components/About"));
// const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <ChipsInput /> },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
