
import photo from '../../assets/razib.jpg'
const About = () => {
    return (
        <div id="about">
            <div className="text-center mt-16">
                <h2 className="text-5xl ">About Me</h2>
                <p className="text-xl mt-4">My Introduction</p>
            </div>
            <div className='flex mt-16 justify-center gap-96'>
                <div>
                    <img className='w-[200px] rounded-3xl' src={photo} alt="" />
                </div>
                <div className='flex items-center gap-10'>
                    <div className='border shadow-xl p-8'>
                        <i className='bx bx-award  text-xl flex justify-center'></i>
                        <p className='mt-2 text-xl'>Experiences</p>
                        <p>1 Year</p>
                        <p>Working</p>
                    </div>
                    <div className='border shadow-xl p-8'>
                        <i className='bx bx-briefcase-alt  text-xl flex justify-center'></i>
                        <p className='mt-2 text-xl'>Completed</p>
                        <p>4+</p>
                        <p>Projects</p>
                    </div>
                    <div className='border shadow-xl p-10'>
                        <i className='bx bx-support text-xl flex pb-2 justify-center'></i>
                        <p className='mt-2 text-xl'>Support</p>
                        <p>Online 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;