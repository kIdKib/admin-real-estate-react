import HeaderSection from "../classic/HeaderSection";

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import Avis from "./Avis";

import avatar from '../../assets/img/avatar.jpg'


const Section5 = () => {
    var plugins = [new Arrow()];

    return ( <div className="mb-[150px]">

        <HeaderSection
        h4Title="Ce qu’ils pensent de nous"
        h1Title="Témoignages clients"
        VerifArrow={false}
        />

        <div className="relative">
            <Flicking circular={true} plugins={plugins} className="pb-[10rem]">

     
                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>

                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>

                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>

                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>

                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>

                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>

                <div className="py-5 w-[45%] mx-5 relative">
                    <div className={`card-panel border py-10 flex flex-col items-center rounded-2xl`} style={{boxShadow:'-1px 1px 24px -8px rgba(0,0,0,0.75)'}}>
                        <p className="w-[75%] mb-5 text-xl flex ">
                            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
                            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
                            consectetur egestas.”
                        </p>
                        <div className='w-10 h-10'>
                            <img src={avatar} alt="" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                        <h5 className="font-bold mt-2">Oumar Sylla</h5>
                    </div>
                </div>


                    <ViewportSlot>
                        <span className="flicking-arrow-prev text-black" style={{marginTop:'7rem', marginLeft:'45%'}}></span>
                        <span className="flicking-arrow-next text-black" style={{marginTop:'7rem', marginRight:'45%'}}></span>
                    </ViewportSlot>


            </Flicking>;
        </div>

    </div> );
}
 
export default Section5;