import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url('${bannerImg}')`, objectFit:'cover'}}>
        <div className="hero-overlay bg-black bg-opacity-40"></div>
      
        <div className="text-center text-neutral-content">
         
            <h1 className="mb-5 text-5xl font-bold text-[#ffecd1]">Efficiency Amplified: Your Task Management Hub</h1>
            <p className="mb-5 text-2xl text-[#f6fff8]">Streamline, Prioritize, Succeed</p>
            <Link to='/dashboard'>
            <button className="btn bg-[#00b4d8] text-white border-none text-xl">Get Started</button>
            </Link>
      
        </div>
      </div>

  
    );
};

export default Banner;