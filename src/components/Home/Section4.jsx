import HeaderSection from "../classic/HeaderSection";

import room1 from '../../assets/img/room1.jpg';
import room2 from '../../assets/img/room2.jpg';
import room3 from '../../assets/img/room3.jpg';
import room4 from '../../assets/img/room4.jpg';


const Section4 = () => {
    return ( 
        <div className="mb-[150px]">

            <HeaderSection
            h4Title="Destination"
            h1Title="Korhogo"
            textPara="Lorem ipsum dolor sit amet consectetur. Quis hendrerit 
            ac risus mauris porttitor vel sit aliquet nullam. Enim 
            molestie dolor neque massa dolor. Et porta at eget non."
            linkArrow="Découvrez les merveilles de cette ville"
            />

            <div className="w-[80%] mx-auto mt-5">
                <div className="flex w-full">
                    <div className="mr-3 w-[50%]">
                        <img src={room1} className="h-[18rem] object-cover w-full rounded-xl" alt="" />
                    </div>
                    <div className="ml-3 w-[50%]">
                        <img src={room2} className="h-[18rem] object-cover w-full rounded-xl" alt="" />
                    </div>
                </div>
                <div className="flex mt-6">
                    <div className="mr-3 w-[50%]">
                        <img src={room1} className="h-[18rem] object-cover w-full rounded-xl" alt="" />
                    </div>
                    <div className="ml-3 w-[50%] mr-3">
                        <img src={room2} className="h-[18rem] object-cover w-full rounded-xl" alt="" />
                    </div>
                    <div className="ml-3 w-[50%]">
                        <img src={room3} className="h-[18rem] object-cover w-full rounded-xl" alt="" />
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default Section4;