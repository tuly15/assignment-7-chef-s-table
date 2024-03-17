import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = props => {
    return (
        <div className='space-y-[50px]'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

Header.propTypes = {wTCooks: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    cCooking: PropTypes.array.isRequired
    
};

export default Header;