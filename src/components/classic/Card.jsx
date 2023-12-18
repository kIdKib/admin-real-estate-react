import hamac from '../../assets/img/hamac.jpg';
import avatar from '../../assets/img/avatar.jpg';

const Card = () => {
    return ( 
            <div className='mb-10'>
            <img src={hamac} alt="" className='w-[100%] h-[300px] mb-2 object-cover' />
            <h3 className='text-sm'>Destinations prisés</h3>
            <h2 className='text-xl'>Les 10 top endroits à visiter</h2>
            <div className='flex items-center mt-2'>
                <img src={avatar} alt="" className='w-[3rem] h-[3rem] object-cover rounded-full'/>
                <p className='ml-2 text-sm'>Sandy Aliyah</p>
                <span className='h-[auto] text-2xl mx-1 -mt-3'>.</span>
                <p className='text-sm'>3min de lecture</p>
            </div>
        </div>
     );
}
 
export default Card;