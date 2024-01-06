import avatar from '../../assets/img/avatar.jpg'

const Avis = ({duStyleAvis}) => {
    console.log(duStyleAvis)
    return ( <div className={`${duStyleAvis} py-3 px-10 flex flex-col`}>
        <p>
            “Lorem ipsum dolor sit amet consectetur. Gravida egestas 
            in velit amet nunc et. Malesuada id ultrices lacus vitae amet 
            consectetur egestas.”
        </p>
        <div className='w-10 h-10 rounded-full'>
            <img src={avatar} alt="" />
        </div>
    </div> );
}
 
export default Avis;