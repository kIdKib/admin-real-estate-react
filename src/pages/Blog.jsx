import Card from "../components/classic/Card";
import Header from "../components/classic/Header";
import HeaderSection from "../components/classic/HeaderSection";
import MiniCard from "../components/classic/MiniCard";

import { FaArrowRight } from "react-icons/fa";

import animal from '../assets/img/animal.jpg';
import Footer from "../components/classic/Footer";



const Blog = () => {
    return ( 
        <div>
            <Header 
            image={animal}
            first_line="Août, la saison où Korhogo vous dévoile" 
            second_line="sa faune et sa flore au grand jour"
            />

            <HeaderSection
            h4Title="Ce qu’il faut savoir"
            h1Title="Dernières actualités"
            VerifArrow={false}
            />

            <div className="flex justify-center px-[7%] mt-4 mb-14">
                <div className="flex justify-center w-[90%]">
                    <div className="w-[50%] mr-5">
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <div className="w-[45%] pl-20">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />

                        <div>
                            <h1 className="text-3xl mt-20 mb-6">Catégories</h1>
                            <div className="flex text-lg">
                                <div className="w-[49%]">
                                    <ul>
                                        <li className="flex items-center"><FaArrowRight className="mr-3 my-3"/>Sites touristiques</li>
                                        <li className="flex items-center"><FaArrowRight className="mr-3 my-3"/>Activités en extérieure</li>
                                        <li className="flex items-center"><FaArrowRight className="mr-3 my-3"/>Séjours et Spa</li>
                                    </ul>
                                </div>
                                <div className="w-[49%] ml-2">
                                    <ul>
                                        <li className="flex items-center"><FaArrowRight className="mr-3 my-3"/>Sites touristiques</li>
                                        <li className="flex items-center"><FaArrowRight className="mr-3 my-3"/>Activités en extérieure</li>
                                        <li className="flex items-center"><FaArrowRight className="mr-3 my-3"/>Séjours et Spa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
     );
}
 
export default Blog;