import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs.JS";
import ErrorComponent from "./components/ErrorComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body></Body>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorComponent/>
  },
  {
    path: '/about',
    element: <AboutUs/>
  },
  {
    path: '/contactUs',
    element: <ContactUs/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
