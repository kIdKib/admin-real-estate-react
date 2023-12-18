import ChuteDeau from '../../assets/img/ChuteDeau.jpg';


const MiniCard = () => {
    return ( <div className='mb-5'>
        <div className='flex'>
            <img src={ChuteDeau} alt="" className='w-[7rem] h-[7rem] object-cover rounded-xl '/>
           <div className='flex flex-col justify-between py-1'>
                <p className='text-lg ml-3'>
                    Les belles chutes de Korhogo à voir entre <br />
                    amis et famille
                </p>
                <div className='ml-3 flex'>
                    <p className=''>Activités à l’extérieur</p>
                    <span className='h-[auto] text-2xl mx-1 -mt-2'>.</span>
                    <p className=''>2min de lecture</p>
                </div>
           </div>
        </div>
    </div> );
}
 
export default MiniCard;