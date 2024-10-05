import appStoreImg from '../../img/app/app-store.png';
import googlePlayImg from '../../img/app/google-play.png';
import phone_download from '../../img/phone-download.png';
// import Google from '../google/Google';
// import Apple from '../apple/Apple';

function Download() {
    return (
        <section className="download" id='download'>
            <div className="container">
                <div className="download__inner">
                    <div className="download__content">
                        <h6 className="download__content-title section-title">Download App Now</h6>
                        <p className="download__content-text section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>

                        <div className='download__banner-links'>
                            <a className='download__banner-link' href="google.com">
                                
                                <img src={googlePlayImg}/>
                            </a>
                            <a className='download__banner-link' href="apple.com">
                                <img src={appStoreImg}/>
                            </a>
                        </div>
                        <ul className="download__stats-list">
                            <li className="download__stats-item">
                                <svg className="download__stats-img" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_259)">
                                <path d="M5.83335 27.7083H29.1667V17.5H32.0834V29.1667C32.0834 29.5534 31.9297 29.9244 31.6562 30.1979C31.3827 30.4714 31.0118 30.625 30.625 30.625H4.37502C3.98825 30.625 3.61731 30.4714 3.34382 30.1979C3.07033 29.9244 2.91669 29.5534 2.91669 29.1667V17.5H5.83335V27.7083ZM20.4167 13.125H27.7084L17.5 23.3333L7.29169 13.125H14.5834V4.375H20.4167V13.125Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_259">
                                <rect width="35" height="35" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <p className="download__stats-count">59865</p>
                                <p className="download__stats-text">Download</p>
                            </li>
                            <li className="download__stats-item">
                                <svg className="download__stats-img" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_268)">
                                <path d="M2.91668 13.125H7.29168V30.625H2.91668C2.5299 30.625 2.15897 30.4714 1.88548 30.1979C1.61199 29.9244 1.45834 29.5534 1.45834 29.1667V14.5833C1.45834 14.1966 1.61199 13.8256 1.88548 13.5521C2.15897 13.2787 2.5299 13.125 2.91668 13.125ZM10.6356 11.2394L19.969 1.90605C20.093 1.78165 20.2578 1.70621 20.433 1.69362C20.6083 1.68103 20.7822 1.73212 20.9227 1.83751L22.1667 2.77084C22.5122 3.0302 22.7731 3.38605 22.9166 3.79351C23.0602 4.20097 23.0798 4.64181 22.9731 5.06043L21.2917 11.6667H30.625C31.3986 11.6667 32.1404 11.974 32.6874 12.5209C33.2344 13.0679 33.5417 13.8098 33.5417 14.5833V17.6517C33.5421 18.0328 33.4678 18.4104 33.3229 18.7629L28.8094 29.7223C28.6993 29.9895 28.5123 30.2179 28.2721 30.3787C28.0319 30.5394 27.7494 30.6251 27.4604 30.625H11.6667C11.2799 30.625 10.909 30.4714 10.6355 30.1979C10.362 29.9244 10.2083 29.5534 10.2083 29.1667V12.2704C10.2084 11.8837 10.3621 11.5128 10.6356 11.2394Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_268">
                                <rect width="35" height="35" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <p className="download__stats-count">29852</p>
                                <p className="download__stats-text">LIke</p>
                            </li>
                            <li className="download__stats-item">
                                <svg className="download__stats-img" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_277)">
                                <path d="M17.5 26.6292L7.21437 32.3867L9.51125 20.825L0.856041 12.8217L12.5621 11.4333L17.5 0.729156L22.4379 11.4333L34.144 12.8217L25.4888 20.825L27.7856 32.3867L17.5 26.6292Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_277">
                                <rect width="35" height="35" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <p className="download__stats-count">1500</p>
                                <p className="download__stats-text">5 star rating</p>
                            </li>
                        </ul>
                    </div>
                    <img className="download__img" src={phone_download} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Download
