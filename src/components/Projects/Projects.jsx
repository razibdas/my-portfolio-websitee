
import './project.css'
import image from '../../assets/Screenshot_1.png'
import image3 from '../../assets/Screenshot_4.png'
import image4 from '../../assets/Screenshot_5.png'
const Projects = () => {
    return (
        <div id='projects' className="mt-44 id">
            <h2 className="text-4xl text-center  "><span className="text-yellow-500">My</span> Projects</h2>
            <div className="lg:mx-96 grid md:grid-cols-2 mt-16 lg:grid-cols-3 justify-center">
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center mt-8">
                            <a href='https://fashion-design-project.web.app/'> <button className="btn ">Livesite</button></a>
                           
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center mt-8">
                            <a href='https://teclink-technology.web.app/'>
                                <button className="btn">Livesite</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={image4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href='https://event-management-auth-7dba0.web.app/'><button className="btn ">Livesite</button></a>
                            
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/61zn7b2/image.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href='https://innavated.web.app/?fbclid=IwAR1RXOAwiOPtw2k3jEjxs0oqjqsQ1H0D1Pv62CWHZW6rKg6wblXvfmtBk2Q'><button className="btn ">Livesite</button></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;