import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Store from "./components/Store";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Products from "./components/Products";
import EmailJS from 'emailjs-com';
import UploadPrescription from "./components/UploadPrescription";

EmailJS.init("Zeg7ovdqSlwuboR-4");

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/stores",
        element: <Store />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/upload",
        element: <UploadPrescription />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
