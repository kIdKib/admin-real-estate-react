import HeaderSection from "../classic/HeaderSection";

import room1 from '../../assets/img/room1.jpg';
import room2 from '../../assets/img/room2.jpg';
import room3 from '../../assets/img/room3.jpg';
import room4 from '../../assets/img/room4.jpg';


const Section3 = () => {

    let navImg = <nav className="mr-[17rem]"><ul className="flex"><li className="border-slate-950 border-b-2">Mosaique</li><li className="mx-3">Carousel</li><li className="mx-3">Slider</li></ul></ nav>

    return ( 
        <div className="mx-auto mb-[150px]">

            <HeaderSection
            h4Title="Découvrez nos résidences"
            h1Title="Mazika en images"
            textPara={navImg}
            VerifArrow={false}
            />

            <div className="h-[34rem] border rounded-2xl overflow-hidden flex w-[80%] mx-auto">
                <div className="w-[50%]">
                    <div>
                        <img src={room2} className="object-cover h-[17rem]" alt="" />
                    </div>
                    <div>
                        <img src={room3} className="object-fill h-[17rem] w-full" alt="" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <img src={room1} alt="" className="h-[34rem] object-cover"/>
                </div>
                <div className="w-[50%]">
                    <div>
                        <img src={room4} className="object-cover h-[17rem] w-full" alt="" />
                    </div>
                    <div>
                        <img src={room2} className="object-cover h-[17rem]" alt="" />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Section3;