import React, {useState} from 'react';
import ProdutsCarousel from './ProductsCoursel'
import Pagination from './Pagination';

import Med1 from '../assets/images/G1.jpg'
import Med2 from '../assets/images/G2.jpg'
import Med3 from '../assets/images/G3.jpg'
import Med4 from '../assets/images/G4.jpg'
import Med5 from '../assets/images/G5.jpg'
import Med6 from '../assets/images/G6.jpg'
import Med7 from '../assets/images/G7.jpg'
import Med8 from '../assets/images/G8.jpg'
import Med9 from '../assets/images/G9.jpg'
import Med10 from '../assets/images/G10.jpg'
import Med11 from '../assets/images/G11.jpg'
import Med12 from '../assets/images/G12.jpeg'
import Med13 from '../assets/images/G13.jpg'
import Med14 from '../assets/images/G14.jpg'
import Med15 from '../assets/images/G15.jpg'
import Med16 from '../assets/images/G16.jpg'


const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onNext = (page) => {
    setCurrentPage(page);
  };
  return (
    
    <>
    <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/product2.png)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">Our Products</h2>
    </section>
    <div className="container mx-auto p-40">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#3470a1]">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProdutsCarousel img={Med1} medName={'A to Z Gold Cap'} medDetails={'10s Form-Tab'} price={'12$'}/>
        <ProdutsCarousel img={Med2} medName={'A to Z NS Syp'} medDetails={'10s Form-Syrup'} price={'12$'}/>
        <ProdutsCarousel img={Med3} medName={'A-Derma Gel Foaming 100ml'} medDetails={'10s Form-Gel'} price={'12$'}/>
        <ProdutsCarousel img={Med4} medName={'Ab Flo Cap 10s'} medDetails={'10s Form-Capsule'} price={'12$'}/>
        <ProdutsCarousel img={Med5} medName={'Ab Flo SR Tab 200mg 10s'} medDetails={'10s Form-Tab'} price={'12$'}/>
        <ProdutsCarousel img={Med6} medName={'Ab Phylline Cap 10s'} medDetails={'10s Form-Capsule'} price={'12$'}/>
        <ProdutsCarousel img={Med7} medName={'Above 5 D Cap 6s'} medDetails={'10s Form-Capsule'} price={'12$'}/>
        <ProdutsCarousel img={Med8} medName={'A to Z NS Syp'} medDetails={'10s Form-Syrup'} price={'12$'}/>
        <ProdutsCarousel img={Med9} medName={'Absolut Cap 10s'} medDetails={'10s Form-Capsule'} price={'12$'}/>
        <ProdutsCarousel img={Med10} medName={'Abzorb Powder 100gm'} medDetails={'10s Form-Powder'} price={'12$'}/>
        <ProdutsCarousel img={Med11} medName={'Acamprol Tab 6s'} medDetails={'10s Form-Tab'} price={'12$'}/>
        <ProdutsCarousel img={Med12} medName={'Acglicolic Liposomal Serum 30ml'} medDetails={'10s Form-Serum'} price={'12$'}/>
        <ProdutsCarousel img={Med13} medName={'Accu Check Active Glucometer Kit 1s'} medDetails={'10s Form-kit'} price={'12$'}/>
        <ProdutsCarousel img={Med14} medName={'Acivir Cream 5gm'} medDetails={'10s Form-Cream'} price={'12$'}/>
        <ProdutsCarousel img={Med15} medName={'Acne Aid Bar 100gm'} medDetails={'10s Form-Bar'} price={'12$'}/>
        <ProdutsCarousel img={Med16} medName={'Acnelak Soap 75gm'} medDetails={'10s Form-Soap'} price={'12$'}/>
      </div>
      <div className="container mx-auto p-4">
      <Pagination currentPage={currentPage} totalPages={4} onNext={onNext} />
    </div>
    </div>
        </>
  )}

  export default Products