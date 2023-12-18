import { useState } from "react";
import Flicking from "@egjs/react-flicking";
import ImgCarouData from "./ImgCarouData";

const ImgCarouC = () => {
    return ( 
        <Flicking renderOnlyVisible={true}>
            {ImgCarouData.map(index => (
                <div className="relative z-1" key={index.image}>
                    <div className="absolute z-5 w-52 left-10 bottom-8 h-[60px]" >
                        <div className="relative flex w-full h-full justify-center items-center">
                            <div className="z-3 absolute opacity-30 bg-slate-100 blur-sm w-full h-full  border-slate-500 border-5 rounded-xl"></div>
                            <p className="relative z-6 text-xl">{index.texte}</p>
                        </div>
                    </div>
                    <img src={index.image} alt="" className="z-2 w-[45vw] h-full mx-4 rounded-xl object-cover " key={index}/>
                    
                </div>

            ))}
        </Flicking>
     );
}
 
export default ImgCarouC;
