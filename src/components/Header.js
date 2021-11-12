import logo from '../logo.svg';
import Nav from './Nav';


function Header() {
    return (
        <header className="header"> 
            <img src={logo} alt="react logo" className="img"></img>
            <Nav />
      </header>
    )
}

export default Header;