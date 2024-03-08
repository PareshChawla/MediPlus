import React, { useEffect, useState } from "react";
import MedicalImg from "../assets/images/medical.jpg";

const HomeMedNumAnimate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [customerNumber, setCustomerNumber] = useState(0);
  const [medicineNumber, setMedicineNumber] = useState(0);
  const targetNumber = 37;
  const storeTarget = 5;
  const MedicineTarget = 45;
  const sectionRef = React.createRef();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionOffset = sectionRef.current?.offsetTop;
    const sectionHeight = sectionRef.current?.clientHeight;

    const isComponentVisible =
      scrollPosition > sectionOffset - window.innerHeight &&
      scrollPosition < sectionOffset + sectionHeight;

    if (isComponentVisible && !isVisible) {
      setIsVisible(true);
      startNumberAnimation();
      startStoreNumAnimation();
      startMedicineNumAnimation();
    } else if (!isComponentVisible && isVisible) {
      setIsVisible(false);
    }
  };

  const startNumberAnimation = () => {
    let start = 0;

    const timer = setInterval(() => {
      setCurrentNumber(start);
      start += 1;

      if (start > targetNumber) {
        clearInterval(timer);
      }
    }, 60);
  };

  const startStoreNumAnimation = () => {
    let start = 0;

    const timer = setInterval(() => {
      setCustomerNumber(start);
      start += 1;

      if (start > storeTarget) {
        clearInterval(timer);
      }
    }, 350);
  };

  const startMedicineNumAnimation = () => {
    let start = 0;

    const timer = setInterval(() => {
      setMedicineNumber(start);
      start += 1;

      if (start > MedicineTarget) {
        clearInterval(timer);
      }
    }, 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        ref={sectionRef}
        className="w-[90%] h-[300px]  ml-[5%] mb-20 mt-32 shadow-md shadow-blue-500/50"
      >
        <div className="relative bg-gradient-to-b  from-blue-400 to-blue-400">
          <img
            className="w-full h-[300px] object-cover brightness-[0.8] opacity-65"
            src={MedicalImg}
            alt="medical-img"
          />
          <div className="flex">
            <div className="w-[33%] border border-black border-opacity-10 h-full absolute z-10 top-0 left-0 text-white flex flex-col items-center justify-center">
              <p className="text-4xl md:text-6xl font-semibold mb-2">{currentNumber}+</p>
              <p className="text-base md:text-xl font-semibold">Stores</p>
              <div className="w-14 h-2 bg-[#6CB250] mt-7"></div>
            </div>
            <div className="w-[34%] border border-black border-opacity-10 h-full absolute z-10 top-0 left-[33%] text-white flex flex-col items-center justify-center">
              <p className="text-4xl md:text-6xl font-semibold mb-2">{customerNumber}L+</p>
              <p className="text-base md:text-xl font-semibold">Happy Customers</p>
              <div className="w-14 h-2 bg-[#6CB250] mt-7"></div>
            </div>
            <div className="w-[33%] border border-black border-opacity-10  h-full absolute z-10 top-0 left-[67%] text-white flex flex-col items-center justify-center">
              <p className="text-4xl md:text-6xl font-semibold mb-2">{medicineNumber}K+</p>
              <p className="text-base md:text-xl font-semibold">Types of Medicines</p>
              <div className="w-14 h-2 bg-[#6CB250] mt-7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMedNumAnimate;
