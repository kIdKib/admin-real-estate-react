import { Link, NavLink } from 'react-router-dom';
import balcony from '../../assets/img/balcony.jpg';



const Header = () => {
    return ( 
        <div className='relative h-[95vh] text-white'>


            <div className='w-full relative h-[100%] z-1 ' style={{ position: 'absolute' }}>
                <img src={balcony} alt="balcon" srcset="" className='z-2' style={{width:'100%', height:'100%' ,objectFit:'cover'}} /> 
            </div>
            
            <div className='relative w-full p-5'>
                <div>
                    <div className=' flex z-2 w-full bg-slate-100/25 py-6 px-10 rounded-lg'>

                        <div className='w-[65%] flex items-center'>
                            <h2>RésidenceMazika</h2>
                        </div>

                        <div className='w-[50%] flex items-center justify-between' >
                            <NavLink to="/">Acceuil</NavLink>
                            <ul>A propos de Mazika </ul>
                            <ul>Nos chambres</ul>
                            <NavLink to="/Blog">Découvrir Korhogo</NavLink>
                            <NavLink to="/Contact">Contactez-nous</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative h-[75%] flex-col w-full flex justify-center items-center z-2'>
                <p className='flex flex-col text-5xl font-bold'>
                    <h1>Les Résidences</h1>
                    <h1 className='mx-[auto]'>Mazika</h1>
                </p>
                <p className='mt-3'>
                    Un havre de paix au coeur de Korhogo
                </p>
            </div>

        </div>
     );
}
 
export default Header;