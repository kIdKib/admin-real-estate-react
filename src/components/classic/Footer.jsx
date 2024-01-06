
const Footer = () => {
    return ( <div className="w-[80%] mx-auto">
        <div className="flex justify-between">

            <div className="w-[30%]">
                <h3 className="font-bold text-xl mb-5">RésidenceMazika</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Quis  
                    ac risus mauris porttitor vel sit aliquet nullam.  
                </p>
            </div>

            <div className="">
                <h3 className="font-bold mb-3">A propos</h3>
                <ul>
                    <li> <a href="#">Notre histoire</a></li>
                    <li> <a href="#">Notre philosophie</a></li>
                    <li> <a href="#">Nos Valeurs</a></li>
                </ul>
            </div>

            <div className="">
                <h3 className="font-bold mb-3">Découvrir</h3>
                <ul>
                    <li> <a href="#">Ville de Korhogo</a></li>
                    <li> <a href="#">Lieux et activités</a></li>
                    <li> <a href="#">Notre Blog</a></li>
                </ul>
            </div>

            <div className="">
                <h3 className="font-bold mb-3">Nos Destinations</h3>
                <ul>
                    <li> <a href="#">Activités en extérieures</a></li>
                    <li> <a href="#">Les lounges Mazika</a></li>
                </ul>
            </div>

            <div className="">
                <h3 className="font-bold mb-3">Assistance</h3>
                <ul>
                    <li> <a href="#">Support</a></li>
                    <li> <a href="#">Termes et Conditions</a></li>
                    <li> <a href="#">Politique de confidentialité</a></li>
                </ul>
            </div>
        </div>

        <div className="text-center	mt-24 border-t py-8">
            2023 RésidenceMazika. Tous droits réservés.
        </div>
    </div> );
}
 
export default Footer;