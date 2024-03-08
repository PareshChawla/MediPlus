import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Store from "./components/Store";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ReturnPolicy from "./components/ReturnPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms&Conditions";
import Faq from "./components/Faq";
import DermaCosmetics from "./components/category/DermaCosmetics";
import FeminineCare from "./components/category/FeminineCare";
import HealthSupplements from "./components/category/HealthSupplements";
import HealthcareDevices from "./components/category/HealthcareDevices";
import HerbalPreparations from "./components/category/HerbalPreparations";
import PersonalCare from "./components/category/PersonalCare";
import EnergyDrinks from "./components/category/EnergyDrinks";
import Prescription from "./components/category/Prescription";
import UploadPrescription from "./components/UploadPrescription";
import EmailJS from 'emailjs-com';
import Health from "./components/blogsHealth/Health";
import BabyCare2 from "./components/homeLatestProducts/BabyCare2";
import MediplusPharmacy from "./components/blogsHealth/MediplusPharmacy";
import Health1 from "./components/blogsHealth/Health/Health1";
import Health2 from "./components/blogsHealth/Health/Health2";
import Health3 from "./components/blogsHealth/Health/Health3";
import Health4 from "./components/blogsHealth/Health/Health4";
import Health5 from "./components/blogsHealth/Health/Health5";
import Health6 from "./components/blogsHealth/Health/Health6";
import Health7 from "./components/blogsHealth/Health/Health7";
import Health8 from "./components/blogsHealth/Health/Health8";
import Health9 from "./components/blogsHealth/Health/Health9";
import Health10 from "./components/blogsHealth/Health/Health10";
import Health11 from "./components/blogsHealth/Health/Health11";
import Health12 from "./components/blogsHealth/Health/Health12";

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
        path: "/return-policy",
        element: <ReturnPolicy />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <Terms />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/category/prescription",
        element: <Prescription />,
      },
      {
        path: "/category/derma-cosmetics",
        element: <DermaCosmetics />,
      },
      {
        path: "/category/feminine-care",
        element: <FeminineCare />,
      },
      {
        path: "/category/baby-care",
        element: <BabyCare2/>,
      },
      {
        path: "/category/health-supplements",
        element: <HealthSupplements />,
      },
      {
        path: "/category/healthcare-devices",
        element: <HealthcareDevices />,
      },
      {
        path: "/category/herbal-preparations",
        element: <HerbalPreparations />,
      },
      {
        path: "/category/personal-care",
        element: <PersonalCare />,
      },
      {
        path: "/category/energy-drinks",
        element: <EnergyDrinks />,
      },
      {
        path: "/upload",
        element: <UploadPrescription />,
      },
      {
        path: "/health",
        element: <Health/>,
      },
      {
        path: "/mediplusPharmacy",
        element: <MediplusPharmacy/>,
      },
      {
        path: "/health1",
        element: <Health1/>,
      },
      {
        path: "/health2",
        element: <Health2/>,
      },
      {
        path: "/health3",
        element: <Health3/>,
      },
      {
        path: "/health4",
        element: <Health4/>,
      },
      {
        path: "/health5",
        element: <Health5/>,
      },
      {
        path: "/health6",
        element: <Health6/>,
      },
      {
        path: "/health7",
        element: <Health7/>,
      },
      {
        path: "/health8",
        element: <Health8/>,
      },
      {
        path: "/health9",
        element: <Health9/>,
      },
      {
        path: "/health10",
        element: <Health10/>,
      },
      {
        path: "/health11",
        element: <Health11/>,
      },
      {
        path: "/health12",
        element: <Health12/>,
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
