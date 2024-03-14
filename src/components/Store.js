import React from "react";
import Logo from "../assets/images/medplusLogo.webp";
import StoreCard from "./StoreCard";

const Store = () => {
  const stores = [
    {
      title: "Store 1",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "In Premises of Indo Gulf Hospital, Sector - 19, Noida - 201301",
      time: "24 Hour Service",
      telephone:"0120 - 4201233",
      phone:"+91 9899054766",
    },
    {
      title: "Store 2",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "G-1236, Ground Floor, Chittaranjan Park, Near C R Park Market - 2, New Delhi - 110019",
      time: "24 Hour Service",
      telephone:"011 - 42381553",
      phone:"+91 9899012417",
    },
    {
      title: "Store 3",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "ShopNo-PG-004, Ground Floor, C-Block Market, Sector-62 , Near Totmall Market, Noida 201301",
      time: "24 Hour Service",
      telephone:"0120 - 4973562",
      phone:"+91 9899050726",
    },
    {
      title: "Store 4",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "ShopNo - 11, Ground Floor, Divyansh Mart, Gaur City - 2, Sector -16 C, Noida 201301",
      time: "24 Hour Service",
      telephone:"0120-4568215",
      phone:"+91 9205001467",
    },
    {
      title: "Store 5",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop No - G-01C- Ground Floor, Beta Plaza, Sector -1, Greater Noida - 201301",
      time: "24 Hour Service",
      telephone:"0120-4153527",
      phone:"+91 9899050641",
    },
    {
      title: "Store 6",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "ShopNo-31, First Floor,Plaza Mall, PlotNo C-2/GH-01 , Sector4, Greater Noida-201301",
      time: "24 Hour Service",
      telephone:"0120-4560505",
      phone:"+91 9899538849",
    },
    {
      title: "Store 7",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Plot No - M1, Ground Floor, Sector - 51, Mall 51, Gurgaon - 122018",
      time: "24 Hour Service",
      telephone:"0124-7144721",
      phone:"+91 9711139307",
    },
    {
      title: "Store 8",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop No - E - 3, Ground Floor, Kalka ji, New Delhi - 110019",
      time: "24 Hour Service",
      telephone:"011-44764509",
      phone:"+91 9717002533",
    },
    {
      title: "Store 9",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop-R-02-10, Ground Floor, M3M Mall Urbana, Block-B, Sector-67, Gurgaon-122102",
      time: "24 Hour Service",
      telephone:"0124-4160983",
      phone:"+91 9717192711",
    },
    {
      title: "Store 10",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "ShopNo-11, Ground Floor, Plot No-9, Garg Plaza, Paschim Vihar, New Delhi-110087",
      time: "24 Hour Service",
      telephone:"011-41040481",
      phone:"+91 8800571182",
    },
    {
      title: "Store 11",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop No-B - 18/5, Double Story, Ramesh Nagar, New Delhi - 110015",
      time: "24 Hour Service",
      telephone:"011-49093867",
      phone:"+91 8800572302",
    },
    {
      title: "Store 12",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop No -4, R-11/19, Sector - 10, Raj Nagar, Ghaziabad - 201002",
      time: "24 Hour Service",
      telephone:"0120-4758786",
      phone:"+91 9667938989",
    },
    {
      title: "Store 13",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop No - 30-A, Ground Floor, Eco Village -1, Plot No - 8, Gr. Noida - 201303",
      time: "24 Hour Service",
      telephone:"0120-4448009",
      phone:"+91 9319595623",
    },
    {
      title: "Store 14",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "Shop No - 07, Palm Hills Arcade, Ground Floor, Village Sikohpur, Sector 77, Gurgaon - 122004",
      time: "24 Hour Service",
      telephone:"0124-4998665",
      phone:"+91 9667932444",
    },
    {
      title: "Store 15",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.503060875326!2d77.327034!3d28.577223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e742b54ee1%3A0x3ff6de5df6370bb4!2sPharmacy%20H%2B!5e0!3m2!1sen!2sin!4v1708684203296!5m2!1sen!2sin",
      logo: Logo,
      address: "ShopNo-01. House No-1434-G, Nigam Office, Sector-09, Vijay Nagar Ghaziabad-201001",
      time: "24 Hour Service",
      telephone:"0120-4444441",
      phone:"+91 9319595624",
    },
  ];
  return (
    <>
      <section className="bg-fixed bg-center bg-cover relative grid place-items-center  min-h-[460px] uppercase text-5xl font-bold bg-[url(/src/assets/images/location.jpg)]">
        <div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #997878 -50%, #000000 100%)",
            opacity: 0.49,
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
          className="absolute top-0 left-0 w-full h-full opacity-50 "
        ></div>
        <h1 className=" text-white z-[2] text-[40px]">Our Store</h1>
      </section>

      <div className=" p-8 "></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-48">
        
        {stores.map((store, i) => (
          <StoreCard
            key={store.title + i}
            title={store.title}
            src={store.src}
            logo={store.logo}
            address={store.address}
            time={store.time}
            telephone={store.telephone}
            phone={store.phone}
           

          />
        ))}
      </div>
      <div className=" p-8 "></div>
    </>
  );
};

export default Store;
