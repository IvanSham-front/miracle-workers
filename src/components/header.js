import logo from '../img/logo.png'
import Nav from './nav'

export default function Header() {
    return (
        <header className="header"> 
            <div className="header__inner">
                <h1 className="header__title">
                    <img
                    alt='logo'
                    src={logo}
                    ></img>
                    Кинопоиск

                </h1>

            </div>
            
            <Nav/>

        </header>    
    )
}