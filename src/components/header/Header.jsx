import Navbar from '../navbar/Navbar';


// import appStoreImg from '../../img/app/app-store.png';
// import googlePlayImg from '../../img/app/google-play.png';
import phone from '../../img/phone.png';
import Card from '../card/Card';
import Google from '../google/Google';
import Apple from '../apple/Apple';

function Header() {
    return (
        <header className="header" id='home'>
            <div className="container">
                <Navbar/>

                <div className = "header__inner" > 
                        <div className="header__content">
                            <div className = "header__baner">
                                <Card/>
                                {/* <h1 className="header__banner-title">A Great App Makes
                                Your Life Better </h1> */}
                                <p className="header__banner-desc" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.</p>
                                <p className = "header__banner-text" >Download App Now</p>
                                <div className='header__banner-links'>
                                    {/* <a className='header__banner-link' href="google.com"><img className='header__banner-img' src={appStoreImg} alt="google" /></a> */}
                                    <Google/>
                                    <Apple/>
                                    {/* <a className='header__banner-link' href="apple.com"><img className='header__banner-img' src={googlePlayImg} alt="apple" /></a> */}
                                </div>
                                    
                            </div>
                    </div>
                    <img className="header__content-img" src={phone} alt="phone"/>
                </div>
            </div>
        </header>
    )
}

export default Header
