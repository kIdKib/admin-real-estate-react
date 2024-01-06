import HeaderSection from "../classic/HeaderSection";

import sectionImg1 from '../../assets/img/section1.jpg';

const Section7 = () => {
    return ( <div>

        <HeaderSection
        h4Title="Comment nous joindre ?"
        h1Title="Nos Contacts"
        textPara="Lorem ipsum dolor sit amet consectetur. Quis hendrerit 
        ac risus mauris porttitor vel sit aliquet nullam. Enim 
        molestie dolor neque massa dolor. Et porta at eget non."
        linkArrow="Accédez à notre contact"
        />


        <div className="flex pt-12 px-[10%]">

            <div className="w-[35%] mt-48">
                <p className="py-5 pl-10 pr-2">
                    <h4 className="font-bold mb-3">Adresse</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quis  
                        ac risus mauris porttitor vel sit aliquet nullam.  
                    </p>
                </p>

                <p className="py-5 pl-10 pr-2">
                    <h4 className="font-bold mb-3">Téléphones</h4>
                    <p>
                        +225 07 00 00 00 00 <br />
                        +225 27 00 00 00 00 <br />
                        +225 01 00 00 00 00 <br />
                    </p>
                </p>


                <p className="py-5 pl-10 pr-2">
                    <h4 className="font-bold mb-3">Email</h4>
                    <p>
                        info@residencemazika.ci
                    </p>
                </p>

            </div>

            <div className="w-[65%] mb-20">
                <div className="w-[85%] relative h-[600px] overflow-hidden rounded-2xl mt-14 ml-10">
                    <img src={sectionImg1} alt="" className="w-full -mt-[250px] object-cover"/>
                </div>
            </div>
        </ div>

    </div> );
}
 
export default Section7;