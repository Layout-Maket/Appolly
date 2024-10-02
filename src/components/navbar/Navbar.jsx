


import facebook from '../../img/social/facebook.svg';
import insta from '../../img/social/insta.svg';
import twitter from '../../img/social/twitter.svg';
import youtube from '../../img/social/youtube.svg';
import logo from '../../img/logo.svg';


function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__top">
                <ul className="nav__contact-list">
                    <li className = "nav__contact-item" >
                        <a className = "nav__contact-link nav__contact-link--mail"
                        href = "mailto:Info@youremail.com" >Info@youremail.com</a>
                    </li>
                    <li className = "nav__contact-item" >
                        <a className = "nav__contact-link nav__contact-link--phone"
                        href = "tel:(480)5550103" > (480) 555 - 0103 </a>
                    </li>
                </ul>
                <ul className = "nav__social-list" >
                    <li className = "nav__social-item" >
                        <a className = "nav__social-link"
                        href = "mailto:Info@youremail.com" ><img src={facebook} alt="facebook"/></a>
                    </li>
                    <li className = "nav__social-item" >
                        <a className = "nav__social-link"
                        href = "tel:(480)5550103" ><img src={insta} alt="insta"/></a>
                    </li>
                    <li className = "nav__social-item" >
                        <a className = "nav__social-link"
                        href = "mailto:Info@youremail.com" ><img src={twitter} alt="twitter"/></a>
                    </li>
                    <li className = "nav__social-item" >
                        <a className = "nav__social-link"
                        href = "tel:(480)5550103" ><img src={youtube} alt="youtube"/></a>
                    </li>
                </ul>
            </div>  
            <div className='nav__menu'>
                <ul className='nav__menu-list'>
                    <li className='nav__menu-item'>
                        <a className='nav__menu-link' href='#'>Home</a>
                    </li>
                    <li className='nav__menu-item'>
                        <a className = 'nav__menu-link' href='#'>About</a>
                    </li>
                    <li className='nav__menu-item'>
                        <a className = 'nav__menu-link' href='#'>Features</a>
                    </li>
                </ul>
                <img className = 'nav__menu-logo' src={logo} alt="logo" />
                    <ul className='nav__menu-list'>
                        <li className='nav__menu-item'>
                            <a className = 'nav__menu-link' href='#'>Screenshot</a>
                        </li>
                        <li className='nav__menu-item'>
                            <a className = 'nav__menu-link' href='#'>Blog</a>
                        </li>
                        <li className='nav__menu-item'>
                            <a className = 'nav__menu-link nav__menu-link--decor' href='#'>Download</a>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar
