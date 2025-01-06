
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header >
            <div className='flex justify-between items-center mx-5 border-b-2 p-4'>
            <h3 className='text-4xl font-bold'>Knowledge Cafe </h3>
            <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;