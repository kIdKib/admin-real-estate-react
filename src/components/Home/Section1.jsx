import { FaArrowRight } from "react-icons/fa";

import sectionImg1 from '../../assets/img/section1.jpg';


const Section1 = () => {
    return ( 
        <div className="flex pt-12 px-[10%]">

            <div className="w-[35%]">
                <h4>Qui sommes-nous ?</h4>
                <h1 className="text-[33px] py-5">Les résidences Mazika</h1>

                <p className="py-10 pl-10 pr-2">
                    <h4 className="font-bold mb-3">Le Fondateur</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quis  
                        ac risus mauris porttitor vel sit aliquet nullam.  
                        molestie dolor neque massa dolor. Et porta.
                    </p>
                </p>

                <p className="py-10 pl-10 pr-2">
                    <h4 className="font-bold mb-3">Nos Valeurs</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quis  
                        ac risus mauris porttitor vel sit aliquet nullam.  
                        molestie dolor neque massa dolor. Et porta.
                    </p>
                </p>

            </div>

            <div className="w-[65%] mb-20">
                <div className="flex justify-end">
                    <div className="w-[45%]">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Quis hendrerit 
                            ac risus mauris porttitor vel sit aliquet nullam. Enim 
                            molestie dolor neque massa dolor. Et porta at eget non.
                        </p>
                        <a href="#" className="inline-flex mt-2 font-bold items-center">
                            Toute notre histoire ici <FaArrowRight className="ml-2"/>
                        </a>
                    </div>
                </div>

                <div className="w-[85%] relative h-[500px] overflow-hidden rounded-2xl mt-14 ml-10">
                    <img src={sectionImg1} alt="" className="w-full -mt-[250px] object-cover"/>
                </div>
            </div>
        </ div>
     );
}
 
export default Section1;