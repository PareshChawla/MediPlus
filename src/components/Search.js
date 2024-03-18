import React, { useEffect, useState } from "react";
import ProdutsCarousel from "./ProductsCoursel"
import Med1 from "../assets/images/G1.jpg";
import Med2 from "../assets/images/G2.jpg";
import Med3 from "../assets/images/G3.jpg";
import Med4 from "../assets/images/G4.jpg";
import Med5 from "../assets/images/G5.jpg";
import Med6 from "../assets/images/G6.jpg";
import Med7 from "../assets/images/G7.jpg";
import Med8 from "../assets/images/G8.jpg";
import Med9 from "../assets/images/G9.jpg";
import Med10 from "../assets/images/G10.jpg";
import Med11 from "../assets/images/G11.jpg";
import Med12 from "../assets/images/G12.jpeg";
import Med13 from "../assets/images/G13.jpg";
import Med14 from "../assets/images/G14.jpg";
import Med15 from "../assets/images/G15.jpg";
import Med16 from "../assets/images/G16.jpg";
import Med20 from "../assets/images/G20.png";
import Med21 from "../assets/images/G21.jpg";
import Med22 from "../assets/images/G22.jpg";
import Med23 from "../assets/images/G23.jpg";
import Med24 from "../assets/images/G24.jpg";
import Med25 from "../assets/images/G25.jpg";
import Med26 from "../assets/images/G26.jpg";
import Med27 from "../assets/images/G27.jpg";
import Med28 from "../assets/images/G28.jpg";
import Med29 from "../assets/images/G29.jpg";
import Med30 from "../assets/images/G30.jpg";
import Med31 from "../assets/images/G31.jpg";
import Med32 from "../assets/images/G32.jpg";
import Med33 from "../assets/images/G33.jpg";
import Med34 from "../assets/images/G34.jpg";
import Med35 from "../assets/images/G35.jpg";
import Med36 from "../assets/images/G36.jpg";
/* Energy Drinks*/
import Med37 from "../assets/images/energyDrinkImg/1ed.jpg";
import Med38 from "../assets/images/energyDrinkImg/2ed.jpg";
import Med39 from "../assets/images/energyDrinkImg/3ed.jpg";
import Med40 from "../assets/images/energyDrinkImg/4ed.jpg";
import Med41 from "../assets/images/energyDrinkImg/5ed.jpg";
import Med42 from "../assets/images/energyDrinkImg/6ed.jpg";
import Med43 from "../assets/images/energyDrinkImg/1ed.jpg";
import Med44 from "../assets/images/energyDrinkImg/2ed.jpg";
import Med45 from "../assets/images/energyDrinkImg/3ed.jpg";
import Med46 from "../assets/images/energyDrinkImg/4ed.jpg";
import Med47 from "../assets/images/energyDrinkImg/5ed.jpg";
import Med48 from "../assets/images/energyDrinkImg/6ed.jpg";
/* Feminine care */
import Med49 from "../assets/images/feminineCareImg/fc1.jpg";
import Med50 from "../assets/images/feminineCareImg/fc2.jpg";
import Med51 from "../assets/images/feminineCareImg/fc3.jpg";
import Med52 from "../assets/images/feminineCareImg/fc4.jpg";
import Med53 from "../assets/images/feminineCareImg/fc5.jpg";
import Med54 from "../assets/images/feminineCareImg/fc6.jpg";
import Med55 from "../assets/images/feminineCareImg/fc7.jpg";
import Med56 from "../assets/images/feminineCareImg/fc8.jpg";
import Med57 from "../assets/images/feminineCareImg/fc9.jpg";
import Med58 from "../assets/images/feminineCareImg/fc12.jpg";
import Med59 from "../assets/images/feminineCareImg/fc11.png";
import Med60 from "../assets/images/feminineCareImg/fc11.png";
/* Healthcare Devices */
import Med61 from "../assets/images/healthcaredevicesimg/hd1.jpg";
import Med62 from "../assets/images/healthcaredevicesimg/hd2.jpg";
import Med63 from "../assets/images/healthcaredevicesimg/hd3.jpg";
import Med64 from "../assets/images/healthcaredevicesimg/hd4.jpg";
/* Health Supplements*/
import Med65 from "../assets/images/healthSupplementImg/hs1.jpg";
import Med66 from "../assets/images/healthSupplementImg/hs2.jpg";
import Med67 from "../assets/images/healthSupplementImg/hs3.jpg";
import Med68 from "../assets/images/healthSupplementImg/hs4.jpg";
import Med69 from "../assets/images/healthSupplementImg/hs5.jpg";
import Med70 from "../assets/images/healthSupplementImg/hs6.jpg";
import Med71 from "../assets/images/healthSupplementImg/hs1.jpg";
import Med72 from "../assets/images/healthSupplementImg/hs2.jpg";
import Med73 from "../assets/images/healthSupplementImg/hs3.jpg";
import Med74 from "../assets/images/healthSupplementImg/hs4.jpg";
import Med75 from "../assets/images/healthSupplementImg/hs5.jpg";
import Med76 from "../assets/images/healthSupplementImg/hs6.jpg";
/* Herbal Preparations */
import Med77 from "../assets/images/herbalPreparationsImg/hp1.jpg";
import Med78 from "../assets/images/herbalPreparationsImg/hp2.jpg";
import Med79 from "../assets/images/herbalPreparationsImg/hp3.jpg";
import Med80 from "../assets/images/herbalPreparationsImg/hp4.jpg";
import Med81 from "../assets/images/herbalPreparationsImg/hp5.jpg";
import Med82 from "../assets/images/herbalPreparationsImg/hp6.jpg";
import Med83 from "../assets/images/herbalPreparationsImg/hp1.jpg";
import Med84 from "../assets/images/herbalPreparationsImg/hp2.jpg";
import Med85 from "../assets/images/herbalPreparationsImg/hp3.jpg";
import Med86 from "../assets/images/healthSupplementImg/hs4.jpg";
import Med87 from "../assets/images/healthSupplementImg/hs5.jpg";
import Med88 from "../assets/images/healthSupplementImg/hs6.jpg";
/* Personal care */
import Med89 from "../assets/images/personalCareImg/pc1.jpg";
import Med90 from "../assets/images/personalCareImg/pc2.jpg";
import Med91 from "../assets/images/personalCareImg/pc3.jpg";
import Med92 from "../assets/images/personalCareImg/pc4.jpg";
import Med93 from "../assets/images/personalCareImg/pc5.jpg";
import Med94 from "../assets/images/personalCareImg/pc6.jpg";
import Med95 from "../assets/images/personalCareImg/pc7.jpg";
import Med96 from "../assets/images/personalCareImg/pc8.jpg";
import Med97 from "../assets/images/personalCareImg/pc9.jpg";
import Med98 from "../assets/images/personalCareImg/pc10.jpg";
import Med99 from "../assets/images/personalCareImg/pc11.jpg";
import Med100 from "../assets/images/personalCareImg/pc12.jpg";
/* Prescription */
import Med101 from "../assets/images/G1.jpg";
import Med102 from "../assets/images/G2.jpg";
import Med103 from "../assets/images/G3.jpg";
import Med104 from "../assets/images/G4.jpg";
import Med105 from "../assets/images/G5.jpg";
import Med106 from "../assets/images/G6.jpg";
import Med107 from "../assets/images/G7.jpg";
import Med108 from "../assets/images/G8.jpg";
import Med109 from "../assets/images/G9.jpg";
import Med110 from "../assets/images/G10.jpg";
import Med111 from "../assets/images/G11.jpg";
import Med112 from "../assets/images/G12.jpeg";
/*Featured products */
import Med113 from "../assets/images/f1.jpg";
import Med114 from "../assets/images/f2.jpg";
import Med115 from "../assets/images/f3.jpg";
import Med116 from "../assets/images/f4.jpg";
import Med117 from "../assets/images/f5.jpg";
import Med118 from "../assets/images/f6.jpg";
/* Babycare */
import Med119 from ".././assets/images/babyCareImg/A1.jpeg";
import Med120 from ".././assets/images/babyCareImg/A2.jpg";
import Med121 from ".././assets/images/babyCareImg/A3.jpg";
import Med122 from ".././assets/images/babyCareImg/A4.jpg";
import Med123 from ".././assets/images/babyCareImg/A5.jpg";
import Med124 from ".././assets/images/babyCareImg/A6.jpg";
import Med125 from ".././assets/images/babyCareImg/A7.webp";
import Med126 from ".././assets/images/babyCareImg/A8.webp";
import Med127 from ".././assets/images/babyCareImg/A9.jpg";
import Med128 from ".././assets/images/babyCareImg/A10.jpg";
import Med129 from ".././assets/images/babyCareImg/A11.webp";
import Med130 from ".././assets/images/babyCareImg/A12.jpg";
import Med131 from ".././assets/images/babyCareImg/A13.jpg";
import Med132 from ".././assets/images/babyCareImg/A14.webp";
import Med133 from ".././assets/images/babyCareImg/A15.jpg";
import Med134 from ".././assets/images/babyCareImg/A16.jpg";
import Med135 from ".././assets/images/babyCareImg/A17.jpg";
import Med136 from ".././assets/images/babyCareImg/A18.jpg";
import Med137 from ".././assets/images/babyCareImg/A19.jpg";
import Med138 from ".././assets/images/babyCareImg/A20.jpeg";
import Med139 from ".././assets/images/babyCareImg/A21.jpeg";
import { useLocation } from 'react-router-dom';

const imageSource =
{
    "Products":
        [
            {
                src: Med1,
                name: "A to Z Gold Cap",
                details: "10s Form-Tab",
                price: "1$",
                category: "Products"
            },
            {
                src: Med2,
                name: "A to Z NS Syp",
                details: "10s Form-Syrup",
                price: "4$",
                category: "Products"
            },
            {
                src: Med3,
                name: "A-Derma Gel Foaming 100ml",
                details: "10s Form-Gel",
                price: "13$",
                category: "Products"
            },
            {
                src: Med4,
                name: "Ab Flo Cap 10s",
                details: "10s Form-Capsule",
                price: "5$",
                category: "Products"
            },
            {
                src: Med5,
                name: "Ab Flo SR Tab 200mg 10s",
                details: "10s Form-Tab",
                price: "12$",
                category: "Products"
            },
            {
                src: Med6,
                name: "Ab Phylline Cap 10s",
                details: "10s Form-Capsule",
                price: "34$",
                category: "Products"
            },
            {
                src: Med7,
                name: "Above 5 D Cap 6s",
                details: "10s Form-Capsule",
                price: "12$",
                category: "Products"
            },
            {
                src: Med8,
                name: "A to Z NS Syp",
                details: "10s Form-Syrup",
                price: "12$",
                category: "Products"
            },
            {
                src: Med9,
                name: "Absolut Cap 10s",
                details: "10s Form-Capsule",
                price: "24$",
                category: "Products"
            },
            {
                src: Med10,
                name: "Abzorb Powder 100gm",
                details: "10s Form-Powder",
                price: "19$",
                category: "Products"
            },
            {
                src: Med11,
                name: "Acamprol Tab 6s",
                details: "10s Form-Tab",
                price: "12$",
                category: "Products"
            },
            {
                src: Med12,
                name: "Acglicolic Liposomal Serum 30ml",
                details: "10s Form-Serum",
                price: "39$",
                category: "Products"
            },
            {
                src: Med13,
                name: "Accu Check Active",
                details: "Form-device",
                price: "12$",
                category: "Products"
            },
            {
                src: Med14,
                name: "Cipla Acivir Cream",
                details: "Form-cream",
                price: "12$",
                category: "Products"
            },
            {
                src: Med15,
                name: "Acne Aid Bar",
                details: "Form-Bar",
                price: "12$",
                category: "Products"
            },
            {
                src: Med16,
                name: "Acnelak soap",
                details: "Form-Soap",
                price: "8$",
                category: "Products"
            },
            {
                src: Med20,
                name: "Acnesol NC Gel 20gm",
                details: "10s Form-Tab",
                price: "12$",
                category: "Products"
            },
            {
                src: Med21,
                name: "Acnestar Soap 75gm",
                details: "10s Form-Syrup",
                price: "12$",
                category: "Products"
            },
            {
                src: Med22,
                name: "Acnonac Tab 10s",
                details: "10s Form-Gel",
                price: "12$",
                category: "Products"
            },
            {
                src: Med23,
                name: "Actibile Tab 300mg 10s",
                details: "10s Form-Capsule",
                price: "12$",
                category: "Products"
            },
            {
                src: Med24,
                name: "Actilife Tab 15s",
                details: "10s Form-Tab",
                price: "12$",
                category: "Products"
            },
            {
                src: Med25,
                name: "Acutrol C Tab 800mg 10s",
                details: "10s Form-Capsule",
                price: "12$",
                category: "Products"
            },
            {
                src: Med26,
                name: "Add Tears Eye Drop 10ml",
                details: "10s Form-Capsule",
                price: "54$",
                category: "Products"
            },
            {
                src: Med27,
                name: "Akt 4 Kit Tab 4s",
                details: "10s Form-Tab",
                price: "12$",
                category: "Products"
            },
            {
                src: Med28,
                name: "Alkasol Syp 100ml",
                details: "Form-Syrup",
                price: "7$",
                category: "Products"
            },
            {
                src: Med29,
                name: "All 9 Cap 10s",
                details: "Form-Capsule",
                price: "35$",
                category: "Products"
            },
            {
                src: Med30,
                name: "Alsamp Eye Drop 10ml",
                details: "From-Eye drop",
                price: "4$",
                category: "Products"
            },
            {
                src: Med31,
                name: "Amace BP Tab 10s",
                details: "Form-tablet",
                price: "32$",
                category: "Products"
            },
            {
                src: Med32,
                name: "Ambulax Tab 10s",
                details: "Form-Tablet",
                price: "1$",
                category: "Products"
            },
            {
                src: Med33,
                name: "Amdepin AT Tab 14s",
                details: "Form-Tablet",
                price: "34$",
                category: "Products"
            },
            {
                src: Med34,
                name: "Amdepin Tab 10mg 10s",
                details: "Form-Tablet",
                price: "12$",
                category: "Products"
            },
            {
                src: Med35,
                name: "Amifru Tab 40mg 10s",
                details: "Form-Tablet",
                price: "12$",
                category: "Products"
            },
            {
                src: Med36,
                name: "Ambrolite D Plus Syp 100ml",
                details: "Form-Tablet",
                price: "9$",
                category: "Products"
            }
        ],
    "Energy Drinks":
        [
            {
                src: Med37,
                name: "Armr Anti Hangover Shot Apple 60ml",
                price: "12",
                category: "Energy Drinks"
            },
            {
                src: Med38,
                name: "Armr Anti Hangover Shot Blackberry 60ml",
                price: "4",
                category: "Energy Drinks"
            },
            {
                src: Med39,
                name: "Armr Daily Detox Shot With Activated Charcoal 60ml",
                price: "24",
                category: "Energy Drinks"
            },
            {
                src: Med40,
                name: "Armr Lemonick Anti Hangover Shot Lemon 60ml",
                price: "32",
                category: "Energy Drinks"
            },
            {
                src: Med41,
                name: "Armr Pro Immunity Shot Kadha 2.0 60ml",
                price: "15",
                category: "Energy Drinks"
            },
            {
                src: Med42,
                name: "Armr Weight Management Shot With Apple Cider Vinegar 60ml",
                price: "18",
                category: "Energy Drinks"
            },
            {
                src: Med43,
                name: "Armr Anti Hangover Shot Apple 60ml",
                price: "24",
                category: "Energy Drinks"
            },
            {
                src: Med44,
                name: "Armr Anti Hangover Shot Blackberry 60ml",
                price: "67",
                category: "Energy Drinks"
            },
            {
                src: Med45,
                name: "Armr Daily Detox Shot With Activated Charcoal 60ml",
                price: "15",
                category: "Energy Drinks"
            },
            {
                src: Med46,
                name: "Armr Lemonick Anti Hangover Shot Lemon 60ml",
                price: "8",
                category: "Energy Drinks"
            },
            {
                src: Med47,
                name: "Armr Pro Immunity Shot Kadha 2.0 60ml",
                price: "11",
                category: "Energy Drinks"
            },
            {
                src: Med48,
                name: "Armr Weight Management Shot With Apple Cider Vinegar 60ml",
                price: "7",
                category: "Energy Drinks"
            }
        ],
    "Feminine Care":
        [
            {
                src: Med49,
                name: "Carmesi Disposable Period Panties M-L (1×4) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med50,
                name: "Carmesi Facial Razor For Women (1×3) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med51,
                name: "Carmesi Panty Liners (1×60) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med52,
                name: "Carmesi Sensitive Sanitary Pads Rash Free (1×10) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med53,
                name: "Good Vibes Brightening Face Serum Vitamin C 30ml",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med54,
                name: "Hi Life Intimate Hygiene Spray (480 Spray) 60ml",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med55,
                name: "Hi Life Silica Drops 1200 Drops 60ml",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med56,
                name: "Hi Life Organic Periods Pads (1X10) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med57,
                name: "Hi Life Organic Panty Liners With Wings (1X24) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med58,
                name: "Hi Life Organic Period Pads (1×8) 1s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med59,
                name: "Sofy Bodyfit Pads 16s",
                price: "12",
                category: "Feminine Care"
            },
            {
                src: Med60,
                name: "Sofy Bodyfit Pads Anti Bacteria XL",
                price: "12",
                category: "Feminine Care"
            }
        ],
    "Health Care":
        [
            {
                src: Med61,
                name: "Genetic Nutrition Bio Whey Powder Chocolate 1Kg",
                price: "12",
                category: "Health Care"
            },
            {
                src: Med62,
                name: "Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
                price: "12",
                category: "Health Care"
            },
            {
                src: Med63,
                name: "Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s",
                price: "12",
                category: "Health Care"
            },
            {
                src: Med64,
                name: "Genetic Nutrition Cap CLA (1×60) 1s",
                price: "12",
                category: "Health Care"
            }
        ],
    "Health Supplements":
        [
            {
                src: Med65,
                name: "Genetic Nutrition Bio Whey Powder Chocolate 1Kg",
                price: "15",
                category: "Health Supplements"
            },
            {
                src: Med66,
                name: "Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
                price: "8",
                category: "Health Supplements"
            },
            {
                src: Med67,
                name: "Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s",
                price: "11",
                category: "Health Supplements"
            },
            {
                src: Med68,
                name: "Genetic Nutrition Cap CLA (1×60) 1s",
                price: "7",
                category: "Health Supplements"
            },
            {
                src: Med69,
                name: "Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med70,
                name: "Genetic Nutrition Cap Mega Probiotics (1×30) 1s",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med71,
                name: "Genetic Nutrition Bio Whey Powder Chocolate 1Kg",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med72,
                name: "Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med73,
                name: "Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med74,
                name: "Genetic Nutrition Cap CLA (1×60) 1s",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med75,
                name: "Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s",
                price: "12",
                category: "Health Supplements"
            },
            {
                src: Med76,
                name: "Genetic Nutrition Cap Mega Probiotics (1×30) 1s",
                price: "12",
                category: "Health Supplements"
            }
        ],
    "Herbal preparations":
        [
            {
                src: Med77,
                name: "Genetic Nutrition Bio Whey Powder Chocolate 1Kg",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med78,
                name: "Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med79,
                name: "Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med80,
                name: "Genetic Nutrition Cap CLA (1×60) 1s",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med81,
                name: "Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med82,
                name: "Genetic Nutrition Cap Mega Probiotics (1×30) 1s",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med83,
                name: "Genetic Nutrition Bio Whey Powder Chocolate 1Kg",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med84,
                name: "Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
                price: "12",
                category: "Herbal preparations"
            },
            {
                src: Med85,
                name: "Genetic Nutrition Cap Absolute Papaya Extract (1×30) 1s",
                price: "15",
                category: "Herbal preparations"
            },
            {
                src: Med86,
                name: "Genetic Nutrition Bio Whey Powder Chocolate Mega Vit Tab and Shaker Free 2Kg",
                price: "8",
                category: "Herbal preparations"
            },
            {
                src: Med87,
                name: "Genetic Nutrition Cap Mega Coenzyme Q10 (1×30) 1s",
                price: "11",
                category: "Herbal preparations"
            },
            {
                src: Med88,
                name: "Genetic Nutrition Cap Mega Probiotics (1×30) 1s",
                price: "7",
                category: "Herbal preparations"
            }
        ],
    "Personal Care":
        [
            {
                src: Med89,
                name: "Faces Canada Lip Balm Orange Mint Vitamin C 4.5g",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med90,
                name: "Faces Canada Lip Color Balm Rose Petal Vitamin E 4.5g",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med91,
                name: "Faces Canada Liquid Sindoor 2.5ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med92,
                name: "Faces Canada Magnet Eyes Eyeliner Intense Black Dermatic Outlines 3.5ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med93,
                name: "Faces Canada Magnet Eyes Kajal 24 HR Water Proof With Almond Oil 0.35g",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med94,
                name: "Faces Canada Magnet Eyes Kajal+Eyeliner+Mascara 1s",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med95,
                name: "Faces Canada Magneteyes Dramatic Volumizing Mascara Dense Lashes Lightweight With Almond Oil 9.5ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med96,
                name: "Faces Canada Nail Enamel Ultime Pro Splash CC5838 8ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med97,
                name: "Faces Canada Nail Enamel Ultime Pro Splash CC5841 8ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med98,
                name: "Faces Canada Nail Enamel Ultime Pro Splash CC5847 8ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med99,
                name: "Faces Canada Nail Enamel Ultime Pro Splash CC5867 8ml",
                price: "12",
                category: "Personal Care"
            },
            {
                src: Med100,
                name: "Faces Canada Nail Enamel Ultime Pro Splash CC5874 8ml",
                price: "12",
                category: "Personal Care"
            }
        ],
    "Prescriptions":
        [
            {
                src: Med101,
                name: "A to Z Gold Cap",
                details: "10s Form-Tab",
                price: "1$",
                category: "Prescriptions"
            },
            {
                src: Med102,
                name: "A to Z NS Syp",
                details: "10s Form-Syrup",
                price: "4$",
                category: "Prescriptions"
            },
            {
                src: Med103,
                name: "A-Derma Gel Foaming 100ml",
                details: "10s Form-Gel",
                price: "13$",
                category: "Prescriptions"
            },
            {
                src: Med104,
                name: "Ab Flo Cap 10s",
                details: "10s Form-Capsule",
                price: "5$",
                category: "Prescriptions"
            },
            {
                src: Med105,
                name: "Ab Flo SR Tab 200mg 10s",
                details: "10s Form-Tab",
                price: "12$",
                category: "Prescriptions"
            },
            {
                src: Med106,
                name: "Ab Phylline Cap 10s",
                details: "10s Form-Capsule",
                price: "34$",
                category: "Prescriptions"
            },
            {
                src: Med107,
                name: "Above 5 D Cap 6s",
                details: "10s Form-Capsule",
                price: "12$",
                category: "Prescriptions"
            },
            {
                src: Med108,
                name: "A to Z NS Syp",
                details: "10s Form-Syrup",
                price: "12$",
                category: "Prescriptions"
            },
            {
                src: Med109,
                name: "Absolut Cap 10s",
                details: "10s Form-Capsule",
                price: "24$",
                category: "Prescriptions"
            },
            {
                src: Med110,
                name: "Abzorb Powder 100gm",
                details: "10s Form-Powder",
                price: "19$",
                category: "Prescriptions"
            },
            {
                src: Med111,
                name: "Acamprol Tab 6s",
                details: "10s Form-Tab",
                price: "12$",
                category: "Prescriptions"
            },
            {
                src: Med112,
                name: "Acglicolic Liposomal Serum 30ml",
                details: "10s Form-Serum",
                price: "39$",
                category: "Prescriptions"
            }
        ],
    "Featured Products":
        [
            {
                src: Med113,
                name: "Renee Dark Desire Eau De Parfum 50ml",
                rating: 3,
                category: "Featured Products"
            },
            {
                src: Med114,
                name: "Renee Oud Aspire Eau De Parfum 50ml",
                rating: 2,
                category: "Featured Products"
            },
            {
                src: Med115,
                name: "Renee Bloom Eau De Parfum 50ml",
                rating: 3,
                category: "Featured Products"
            },
            {
                src: Med116,
                name: "Renee Kajal Pen Hard Black (2X.35g) 1s",
                rating: 4,
                category: "Featured Products"
            },
            {
                src: Med117,
                name: "Renee Fab 5 Nude 5 In 1 Lipstick 7.5gm",
                rating: 5,
                category: "Featured Products"
            },
            {
                src: Med118,
                name: "Renee Fab 5 Poppy 5 In 1 Lipstick 7.5gm",
                rating: 4,
                category: "Featured Products"
            }
        ],
    "Baby Care":
        [
            {
                src: Med119,
                name: "Bonne Nipples",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med120,
                name: "Cerelac Stage 1 Cereal BIB Rice 300gm",
                price: "10$",
                category: "Baby Care"
            },
            {
                src: Med121,
                name: "Cerelac Stage 1 Cereal Wheat Apple Ref 300gm",
                price: "10$",
                category: "Baby Care"
            },
            {
                src: Med122,
                name: "Cerelac Stage 1 Powder BIB Wheat Apple 300gm",
                price: "10$",
                category: "Baby Care"
            },
            {
                src: Med123,
                name: "Cerelac Stage 1 Powder Wheat 300gm",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med124,
                name: "Cerelac Stage 1 Powder Wheat Apple Carrot 300gm",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med125,
                name: "Cerelac Stage 1 Powder Wheat Apple Cherry Ref 300gm",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med126,
                name: "Cerelac Stage 2 Cereal BIB Rice Veg 300gm",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med127,
                name: "Cerelac Stage 2 Cereal Wheat Orange 300gm",
                price: "9$",
                category: "Baby Care"
            },
            {
                src: Med128,
                name: "Cerelac Stage 2 Powder Wheat Apple Chry 300gm",
                price: "9$",
                category: "Baby Care"
            },
            {
                src: Med129,
                name: "Cerelac Stage 3 Cereal 4m/grn Dalveg 300gm",
                price: "9$",
                category: "Baby Care"
            },
            {
                src: Med130,
                name: "Cerelac Stage 3 Cereal BIB Wheat Honey Dates 300gm",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med131,
                name: "Cerelac Stage 3 Cereal Wheat Rice Mixed Fruit 300gm",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med132,
                name: "Chicco Baby Bath Foaming 500ml",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med133,
                name: "Chicco Baby Moments Gift Pack Blue 0M+ 1s",
                price: "20$",
                category: "Baby Care"
            },
            {
                src: Med134,
                name: "Chicco Baby Soap Tri Pack 100gm",
                price: "8$",
                category: "Baby Care"
            },
            {
                src: Med135,
                name: "Chicco Baby Soap Moment",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med136,
                name: "Cerelac Stage 5 Powder 5Grains & Fruits 300gm",
                price: "5$",
                category: "Baby Care"
            },
            {
                src: Med137,
                name: "Chicco Baby Soft Cleansing Wipes 20pc",
                price: "5$",
                category: "Baby Care"
            },
            {
                src: Med138,
                name: "Chicco Baby Wipes Cleansing 72pc",
                price: "12$",
                category: "Baby Care"
            },
            {
                src: Med139,
                name: "Chicco Baby Wipes Cleansing Flip 72pc",
                price: "12$",
                category: "Baby Care"
            }
        ],



}



const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchQuery !== null) {
            const filtered = [
                ...imageSource.Products,
                ...imageSource["Health Care"],
                ...imageSource["Energy Drinks"],
                ...imageSource["Health Supplements"],
                ...imageSource["Feminine Care"],
                ...imageSource["Prescriptions"],
                ...imageSource["Herbal preparations"],
                ...imageSource["Personal Care"],
                ...imageSource["Baby Care"],

            ].filter((product) =>
                (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold mb-4 text-[#3470a1] text-left">Search Results for "{searchQuery}"</h1>
                {searchQuery !== null ? (
                    <>
                        {filteredProducts.length === 0 ? (
                            <p className="text-2xl font-bold mb-4 text-[#3470a1] text-left">No results found.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredProducts.map((product, index) => (
                                    <ProdutsCarousel
                                        key={index}
                                        img={product.src}
                                        medName={product.name}
                                        medDetails={product.details}
                                        price={product.price}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <p>No search query provided.</p>
                )}
            </div>
        </>
    );
}

export default Search;
