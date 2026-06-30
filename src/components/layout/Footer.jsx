import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import bgImg from '../../assets/img/footerCover.png'
const Footer = () => {
    return ( 
        <>
        <sec>
            <div className="bg-cover bg-position-[0%_15%] relative w-full"
            style={{backgroundImage: `url(${bgImg})`}}>

                <div className="flex py-20 bg-purple-900/50 mt-auto justify-center items-center">
                    <div>
                        <h2 className='font-bold text-xl text-white '>join now with your email address and choose your plan to get started</h2>
                        <div className="flex mt-5 justify-center items-center gap-10 ">
                            <input className="pl-2 border text-white placeholder:text-white outline-none border-white rounded-sm w-1/2 py-2" placeholder="email address"></input>
                            <button className='bg-purple-500 py-2 px-8 rounded-tr-2xl rounded-bl-2xl'>join now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-black'>

            <div className='bg-black flex gap-24 py-20 border-b border-white '>
                <div className='flex-1 px-16 text-white '>
                    <h1 className='mb-10 text-4xl'>meta movie</h1>
                    <p className='text-sm '>Lorem Ipsum is placeholder text used in printing, typesetting,
                         and digital design to simulate content placeholder text used in printing, placeholder text used in printing, </p>
                    <div className='flex items-center justify-between gap-6 pt-10 '>
                    <FaTwitter className='rounded-full text-2xl cursor-pointer ' />
                    <FaInstagram className=' text-2xl cursor-pointer '/> 
                    <FaFacebook className=' text-2xl cursor-pointer '/>
                    </div>
                </div>
                <div className='flex-3 space-y-7  text-white grid grid-cols-3'>
                    <h1>company</h1>
                    <h1>help & support</h1>
                    <h1>legal</h1>
                    <a className='cursor-pointer underline'>about us</a>
                    <a className='cursor-pointer underline'>help center</a>
                    <a className='cursor-pointer underline'>term of service</a>
                    <a className='cursor-pointer underline'>careers</a>
                    <a className='cursor-pointer underline'>FAQ</a>
                    <a className='cursor-pointer underline'>Priavcy</a>
                    <a className='cursor-pointer underline'>Press</a>
                    <a className='cursor-pointer underline'>support</a>
                    <a className='cursor-pointer underline'>cookies</a>
                    <a className='cursor-pointer underline'>investor</a>
                    <a className='cursor-pointer underline'>account</a>
                    <a className='cursor-pointer underline'>accebility</a>
                </div>
                
            </div>
            <div className='py-10 text-white flex items-center text-center justify-center'> © 2026 meta movie. All rights reserved.</div>
            </div>
        </sec>
        </>
     );
}
 
export default Footer;