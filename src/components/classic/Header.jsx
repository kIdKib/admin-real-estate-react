import { Link, NavLink } from "react-router-dom";


const Header = ({image, first_line, second_line}) => {
    return ( 
        <div className='relative h-[95vh] text-black px-[2%]'>
            <div className='relative w-full'>
                <nav>
                    <div className='flex z-2 w-full py-6 px-10 rounded-lg'>

                        <div className='w-[60%] flex items-center'>
                            <h2>RésidenceMazika</h2>
                        </div>

                        <div className='w-[45%] flex items-center justify-between' >
                            <NavLink to="/">Acceuil</NavLink>
                            <ul>A propos de Mazika </ul>
                            <ul>Nos chambres</ul>
                            <NavLink to="/Blog">Découvrir Korhogo</NavLink>
                            <NavLink to="/Contact">Contactez-nous</NavLink>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='relative h-[75%] flex-col w-full flex items-center z-2 text-white'>
                <div className='w-full absolute h-[100%] z-1 '>
                    <img src={image} alt="balcon" srcset="" className='z-2' style={{width:'100%', height:'100%' ,objectFit:'cover'}} /> 
                </div>

                <p className='relative z-5 text-3xl font-bold flex flex-col items-center mt-[14rem]'>
                    {first_line}
                    <p className="inline-block">{second_line}</p>
                </p>


            </div>

        </div>
     );
}
 
export default Header;