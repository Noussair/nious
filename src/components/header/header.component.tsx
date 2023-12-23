import NavBar from './components/NavBar.component';
import ShowCase from './components/ShowCase.component';
import './header.css'



const Header = () => {
    return (
        <>
        <header id='header' className='w-ful'>
            <NavBar></NavBar>
            <ShowCase></ShowCase>
        </header>
        </>
    );
};

export default Header;