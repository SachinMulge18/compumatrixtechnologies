import React from "react";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Home, Listing, Discover, Blogs, Contact } from "./pages";
import { Properties, WorkWithUs, Testimonial, Footer } from "./components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Properties />
        <WorkWithUs />
        <Listing />
        <Discover />
        <Testimonial />
        <Blogs />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
