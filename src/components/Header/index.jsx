import { useEffect, memo } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import "./style.scss"
import Logo from "../../assets/mpk-logo-PhotoRoom.png" 
import Address from "../../assets/address.svg" 
import Phone from "../../assets/phone.svg" 

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <header className="header">
            <section data-aos="flip-left" className="header__top">
            <img className="header__top logo" src={Logo} alt="logo"/>
            <address><img src={Address} alt="address"/>107014, Москва, Новочеркасский б-р, д. 6</address>
            <a href="tel:88002509982"><img src={Phone} alt="phone"/>8-800-100-10-20</a>
            <button type="button" className="header__top button">Оставить заявку</button>
            </section>
            <section data-aos="fade-down" className="header__bottom">
                <h1 className="header__bottom title">Токоизолированные подшипники</h1>
                <h3 className="header__bottom subtitle">в наличии и на заказ</h3>
                <button type="button" className="header__bottom button">Оставить заявку</button>
            </section>
        </header>
    )
}

export default memo(Header);