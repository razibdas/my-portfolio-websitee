import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './button.css'
import './style.css'
import { FaFacebookF, FaTwitter,  FaInstagramSquare  } from "react-icons/fa";
import img from '../../assets/razib.jpg'

const Banner = () => {

    return (
        <div className="flex lg:flex-row md:flex-col gap-20 flex-col-reverse items-center justify-evenly ml-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -200 },
                    visible: { opacity: 1, x: 0 }
                }}>
                <p className='text-6xl'>
                    Razib{' '}
                    <span className='text-yellow-500'>
                        Das
                    </span>
                </p>
                <div className='mt-8 '>
                    <p>Passionate junior web developer dedicated to<br></br> crafting responsive and user-friendly websites.<br></br> Eager to learn and contribute to innovative projects.</p>
                </div>

                <div className='flex gap-8 mt-6 items-center'>
                    <Link to="" id='contacts' >
                        <button className="btn btn-outline btn-secondary button neon-button" id='contacts' >Contact</button>
                    </Link>
                    <Link to="">
                        <button className=" px-3 py-2 rounded-lg btn-secondary button text-black">RESUME</button>
                    </Link>
                </div>
                <div className='mt-8 flex gap-4'>
                    <FaFacebookF className='text-2xl' />
                    <FaTwitter className='text-2xl' />
                    <FaInstagramSquare className='text-2xl'/>
                </div>

            </motion.div>
            <div className='mr-8 mt-6 ml-6'>
                <img
                    className="w-full max-w-[400px] md:max-w-[400px] h-[450px] "
                    src={img}
                    alt="profile"
                    style={{ borderRadius: '200px 200px 0 0' }}
                />
            </div>
        </div>
    );
};

export default Banner;