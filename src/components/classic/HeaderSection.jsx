import { FaArrowRight } from "react-icons/fa";

const HeaderSection = ({h4Title, h1Title, textPara, linkArrow, VerifArrow}) => {
    return ( 
        <div className="w-full flex justify-between px-[10%]">
            <div className="w-[35%]">
                <h4>{h4Title}</h4>
                <h1 className="text-[33px] py-5">{h1Title}</h1>
            </div>

            <div>
                <div className="flex justify-end">
                    <div className="w-[45%]">
                        <p>
                            {textPara}
                        </p>
                        <a href="#" className="inline-flex mt-2 font-bold items-center">
                            {linkArrow} { VerifArrow ?? <FaArrowRight className="ml-2"/>}
                        </a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default HeaderSection;