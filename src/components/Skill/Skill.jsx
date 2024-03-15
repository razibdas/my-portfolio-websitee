
import 'animate.css';

const Skill = () => {
    return (
        <div id='skills'>
            <div className='lg:flex justify-evenly  lg:gap-56'>
                <div className='mt-12'>
                    <h2 className=' text-4xl animate__animated animate__fadeIn text-center'>My Skills</h2>
                    <div className='border-b-4 ml-1 border-white lg:w-32 mt-2'></div>
                </div>
                
            </div>
            <div className='lg:flex justify-center pr-10 ml-24 mr-6 mt-16 gap-6'>
                <img className='w-48  rounded-full' src="https://i.ibb.co/nnGspMB/image.png" alt="" />
                <img className='w-48  rounded-full' src="https://i.ibb.co/xXHJtzs/image.png" alt="" />
                <img className='w-48  rounded-full' src="https://i.ibb.co/994xkV0/image.png" alt="" />
                <img className='w-48  rounded-full' src="https://i.ibb.co/41HtRJk/image.png" alt="" />
                <img className='w-48  rounded-full' src="https://i.ibb.co/2dJM7SD/image.png" alt="" />
                <img className='w-48  rounded-full' src="https://i.ibb.co/KhmxTg2/image.png" alt="" />
            </div>



        </div>
    );
};

export default Skill;

