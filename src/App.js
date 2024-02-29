import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Store from "./components/Store";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Products from "./components/Products";
<<<<<<< HEAD
import EmailJS from 'emailjs-com';
import UploadPrescription from "./components/UploadPrescription";

EmailJS.init("Zeg7ovdqSlwuboR-4");
=======
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
>>>>>>> d4d28b6704db23c35de86bfa79b4f9143948fd46

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
<<<<<<< HEAD
        path: "/upload",
        element: <UploadPrescription />,
=======
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
>>>>>>> d4d28b6704db23c35de86bfa79b4f9143948fd46
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
