import logo from '../logo.svg';
import Nav from './Nav';


export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="react logo" className="img"></img>
                <h5 className="title">ReactFacts</h5>
            </div>
            <Nav />
      </header>
    )
}
