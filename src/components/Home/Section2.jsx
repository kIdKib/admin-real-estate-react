import HeaderSection from "../classic/HeaderSection";
import "@egjs/react-flicking/dist/flicking.css";
import ImgCarouC from "./ImgCarouC";



const Section2 = () => {

    return ( 
        <div className="mb-[150px]">

            <HeaderSection
            h4Title="Pour des séjours agréables"
            h1Title="Nos Chambres"
            textPara="Lorem ipsum dolor sit amet consectetur. Quis hendrerit 
            ac risus mauris porttitor vel sit aliquet nullam. Enim 
            molestie dolor neque massa dolor. Et porta at eget non."
            linkArrow="Découvrez nos formules et tarifs"
            />

            <div className="w-full mt-10">
                <ImgCarouC />
            </div>


        </div>
     );
}
 
export default Section2;