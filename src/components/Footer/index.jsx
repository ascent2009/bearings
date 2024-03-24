import { useEffect, memo } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import "./style.scss"
import Address from "../../assets/address.png" 
import Phone from "../../assets/ringing-call.png" 
import Mail from "../../assets/flying-mail.png" 
import Map from "../../assets/Mpk-map.png" 

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <footer className="footer" data-aos="fade-down">
            <section className="footer__contacts">
                <h1 className="footer__contacts title">Контакты</h1>
                <div className="footer__contacts block">
                    <a href="tel:88002509982"><img src={Phone} alt="phone"/>8-800-100-10-20</a>
                    <a href="mailto:ascent2009@yandex.ru"><img src={Mail} alt="email"/>ascent2009@yandex.ru</a>
                    <address><img src={Address} alt="address"/>107014, Москва, Новочеркасский б-р, д. 6</address>
                </div>
            </section>
            <section className="footer__map" id="map">
                <img src={Map} alt="map" />
            </section>
        </footer>
    )
}

export default memo(Footer);