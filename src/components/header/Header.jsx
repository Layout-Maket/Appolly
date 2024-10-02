import Navbar from '../navbar/Navbar';


import appStoreImg from '../../img/app/app-store.png';
import googlePlayImg from '../../img/app/google-play.png';
import phone from '../../img/phone.png';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Navbar/>

                <div className = "header__inner" > 
                    <div className='fwe'>
                        <div className="header__content">
                            <div className = "header__baner">
                                <h1 className="header__banner-title">A Great App Makes
                                Your Life Better </h1>
                                <p className="header__banner-desc" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.</p>
                                <p className = "header__banner-text" >Download App Now</p>
                                <div className='header__banner-links'>
                                    <a className='header__banner-link' href="google.com"><img className='header__banner-img' src={appStoreImg} alt="google" /></a>
                                    <a className='header__banner-link' href="apple.com"><img className='header__banner-img' src={googlePlayImg} alt="apple" /></a>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>
        </header>
    )
}

export default Header
