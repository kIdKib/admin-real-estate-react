import Header from "../components/classic/Header";
import HeaderSection from "../components/classic/HeaderSection";

import empty from "../assets/img/empty.jpg"
import Footer from "../components/classic/Footer";

const Contact = () => {
    return ( 
        <div>
            <Header image={empty} />

            <HeaderSection
            h4Title="Comment nous joindre ?"
            h1Title="Nos Contacts"
            textPara="Lorem ipsum dolor sit amet consectetur. Quis hendrerit 
            ac risus mauris porttitor vel sit aliquet nullam. Enim 
            molestie dolor neque massa dolor. Et porta at eget non."
            VerifArrow={false}
            />

            <div className="w-[80%] mt-8 rounded-xl mx-auto border py-10 px-14" style={{boxShadow: "-2px 1px 26px -8px rgba(0,0,0,0.75)"}}>
                <form action="#">
                    <div className="w-full flex justify-between">
                        <input type="text" className="w-[49%] py-5 rounded-2xl px-8 border" name="last_name" id="" placeholder="Votre nom"/>
                        <input type="text" className="w-[49%] py-5 rounded-2xl px-8 border" name="first_name" id="" placeholder="Votre prénom"/>
                    </div>
                    <input type="text" name="object" id="" placeholder="Objet" className="w-full py-5 rounded-2xl px-8 border mt-8" />
                    <textarea name="message" placeholder="Votre message" id="" cols="30" rows="10" className="w-full py-5 rounded-2xl px-8 border mt-8" ></textarea>
                    <input type="button" value="Envoyer votre message" name="subBtn" className="w-full py-5 rounded-2xl px-8 border mt-8 font-bold bg-slate-200" style={{cursor:"pointer"}} />
                </form>
            </div>

            <div className="flex w-[80%] mx-auto my-32 text-2xl justify-between">
                <h1>Email : info@residencemazika.ci</h1>
                <h1>Téléphone : +225 27 00 00 00 00</h1>
                <h1>Adresse : Bvd VGA, sotuba, korhogo</h1>
            </div>

            <Footer />
            
        </div>
    );
}
 
export default Contact;