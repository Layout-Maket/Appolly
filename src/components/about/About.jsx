import phone_about from "../../img/phone-about.png"

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__top">
                    <h2 className="about__top-title section-title">About Our App</h2>
                    <p className="about__top-text section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                </div>
                <div className="about__content">
                    <img className="about__content-img" src={phone_about} alt="phone-content" />
                    <ul className="about__content-list">
                        <li className="about__content-item">
                            <h6 className="about__content-title">Creative design</h6>
                            <p className="about__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                        </li>
                        <li className="about__content-item">
                            <h6 className="about__content-title">easy to use</h6>
                            <p className="about__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                        </li>
                        <li className="about__content-item">
                            <h6 className="about__content-title">Best user experince</h6>
                            <p className="about__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
