import React, { useState, useEffect } from 'react';
import facebook from '../../img/social/facebook.svg';
import insta from '../../img/social/insta.svg';
import twitter from '../../img/social/twitter.svg';
import youtube from '../../img/social/youtube.svg';
import logo from '../../img/logo.svg';

import Button from '../button/Button';
// import Switch from '../Switch/Switch';


function Navbar() {
    const [isActiveHome, setIsActiveHome] = useState(false)
    const [isActiveBlog, setIsActiveBlog] = useState(false)

    const toggleActiveClassHome = () => {
        setIsActiveHome(!isActiveHome)
    }

    const toggleActiveClassBlog = () => {
        setIsActiveBlog(!isActiveBlog)
    }

    useEffect(() => {
        const links = document.querySelectorAll('.nav__menu-link');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        return () => {
            // Очищаємо слухачі подій при демонтажі компонента
            links.forEach(link => {
                link.removeEventListener('click', () => {});
            });
        };
    }, []);


    return (
        <nav className="nav" id='nav'>
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
                <svg className={`nav__top-home ${isActiveHome ? 'nav__top-home--active' : ''}`} onClick={toggleActiveClassHome} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
                </svg>
                <ul className={`nav__menu-list nav__menu-list-home ${isActiveHome ? 'nav__menu-list--active' : ''}`}>
                    <li className='nav__menu-item'>
                        <a className='nav__menu-link' href='#home'>Home</a>
                    </li>
                    <li className='nav__menu-item'>
                        <a className = 'nav__menu-link' href='#about'>About</a>
                    </li>
                    <li className='nav__menu-item'>
                        <a className = 'nav__menu-link' href='#features'>Features</a>
                    </li>
                </ul>
                <img className = 'nav__menu-logo' src={logo} alt="logo" />
                <ul className={`nav__menu-list nav__menu-list-blog ${isActiveBlog ? 'nav__menu-list-blog--active' : ''}`}>
                    <li className='nav__menu-item'>
                            <a className = 'nav__menu-link' href='#screenshot'>Screenshot</a>
                    </li>
                    <li className='nav__menu-item'>
                            <a className = 'nav__menu-link' href='#blog'>Blog</a>
                    </li>
                    <li className='nav__menu-item'>
                            <a className = 'nav__menu-link nav__menu-link--decor' href='#download'><Button/></a>
                    </li>
                </ul>
                
                <svg className={`nav__top-blog ${isActiveBlog ? 'nav__top-blog--active' : ''}`} onClick={toggleActiveClassBlog} width="35px" height="35px" viewBox="0 0 35 35" version="1.1">
                <g id="surface1">
                <path d="M 4.375 8.75 C 4.375 7.945312 5.027344 7.292969 5.832031 7.292969 L 29.167969 7.292969 C 29.972656 7.292969 30.625 7.945312 30.625 8.75 C 30.625 9.554688 29.972656 10.207031 29.167969 10.207031 L 5.832031 10.207031 C 5.027344 10.207031 4.375 9.554688 4.375 8.75 Z M 4.375 17.5 C 4.375 16.695312 5.027344 16.042969 5.832031 16.042969 L 29.167969 16.042969 C 29.972656 16.042969 30.625 16.695312 30.625 17.5 C 30.625 18.304688 29.972656 18.957031 29.167969 18.957031 L 5.832031 18.957031 C 5.027344 18.957031 4.375 18.304688 4.375 17.5 Z M 5.832031 24.792969 C 5.027344 24.792969 4.375 25.445312 4.375 26.25 C 4.375 27.054688 5.027344 27.707031 5.832031 27.707031 L 29.167969 27.707031 C 29.972656 27.707031 30.625 27.054688 30.625 26.25 C 30.625 25.445312 29.972656 24.792969 29.167969 24.792969 Z M 5.832031 24.792969 "/>
                </g>
                </svg>
                {/* <Switch/> */}
            </div>
        </nav>
    )
}

export default Navbar
