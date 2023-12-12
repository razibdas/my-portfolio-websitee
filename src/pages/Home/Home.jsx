import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

import Skill from "../../components/Skill/Skill";

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Banner></Banner>
            <Skill></Skill>
            <Projects></Projects>
            <Education></Education>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;