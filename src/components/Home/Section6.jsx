import Card from "../classic/Card";
import HeaderSection from "../classic/HeaderSection";
import MiniCard from "../classic/MiniCard";

const Section6 = () => {
    return ( <div>

        <HeaderSection  
        h4Title="Actualités"
        h1Title="Pour ne rien rater"
        textPara="Lorem ipsum dolor sit amet consectetur. Quis hendrerit 
        ac risus mauris porttitor vel sit aliquet nullam. Enim 
        molestie dolor neque massa dolor. Et porta at eget non."
        linkArrow="Accédez à notre blog"
        />

        <div className="flex justify-center px-[7%] mt-14 mb-14">
            <div className="flex justify-center w-[90%]">
                <div className="w-[50%] mr-5">
                    <Card />
                </div>

                <div className="w-[45%] pl-20">
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />

                </div>
            </div>
        </div>

    </div> );
}
 
export default Section6;