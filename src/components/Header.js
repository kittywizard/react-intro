import logo from '../logo.svg';

function Header() {
    return (
        <header> 
            <img src={logo} alt="react logo" className="img"></img>
             <h3>Fun facts about React</h3>
      </header>
    )
}

export default Header;