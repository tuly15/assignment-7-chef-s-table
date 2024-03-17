import search from '../../assets/Frame (1).png';
import profile from '../../assets/Frame.png';
// import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-2xl lg:text-[32px] font-bold">Chef's Table</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[rgba(21,11,43,0.70)]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-4">
                        <div className="hidden lg:flex gap-2 pl-6 items-center bg-[rgba(21,11,43,0.05)] rounded-[50px] w-[260px] h-12">
                            <img className='size-6' src={search} alt="" />
                            <input className='h-full w-full rounded-r-[50px] outline-none text-[rgba(21,11,43,0.70)] bg-transparent font-normal text-base' placeholder='Search' type="text" />
                        </div>
                        <a className="btn p-0 bg-[#0BE58A] size-12 rounded-[50%]"><img className='size-8' src={profile} alt="" /></a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a href="">About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Navbar.propTypes = {

// };

export default Navbar;





