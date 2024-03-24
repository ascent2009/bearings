import { useEffect, memo } from "react"
import "./style.scss"
import Сheck from "../../assets/check-mark.svg"
import Feature from "../../assets/bearing-feature.png"
import Baller from "../../assets/ball-bearing.png"
import Ceramic from "../../assets/ceramic-bearing.png"
import Roller from "../../assets/roll-bearing.png"
import Truck from "../../assets/truck.png"
import Hand from "../../assets/bear-hand.png"
import Aos from "aos"
import "aos/dist/aos.css"
import Modal from "../Modal"

const oddsConfig = [
    {id: 1, text: "увеличенный срок службы за счет дополнительной изоляции;"},
    {id: 2, text: "увеличение межремонтного интервала;"},
    {id: 3, text: "сокращение затрат на ТО генераторов и электродвигателей;"},
    {id: 4, text: "подшипники не будут подвержены повреждениям блуждающими токами;"},
    {id: 5, text: "обеспечат максимальный срок службы смазочных материалов."},
]

const offerConfig = [
    {id: 1, src: Baller, subtitle: "Токоизоляционные шариковые подшипники", text: "Подшипники с латунным или стальным сепаратором, покрытием наружного или внутреннего кольца"},
    {id: 2, src: Ceramic, subtitle: "Подшипники с керамическими телами качения", text: "Керамические шарики и ролики обладают максимальной износостойкостью и токоизоляционными свойствами"},
    {id: 3, src: Roller, subtitle: "Токоизоляционные роликовые подшипники", text: "Подшипники с латунным или стальным сепаратором, покрытием наружного или внутреннего кольца"},
]

const specialConfig = [
    {id: 1, src: Hand, subtitle: "Индивидуальный подход", text: "разработки по Вашим персональным заданиям"},
    {id: 2, src: Truck, subtitle: "Специальные условия", text: "доставка и самовывоз, постоплата, скидки"},
    
]

const Main = ({onClick}) => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <main className="main">
            <section data-aos="fade-up" className="main__odds">
                <h2 className="main__odds title">Достоинства подшипников ПЗПК с электроизоляцией</h2>
                <div className="main__odds block">
                    <ul className="main__odds block list">
                        {oddsConfig.map(({id, text}) => (
                            <li key={id} data-aos="fade-up" className="main__odds block list list-item">
                                <img src={Сheck} alt="check" />
                                {text}
                            </li>
                            )
                           )
                        }
                    </ul>
                    <img src={Feature} data-aos="fade-up" alt="bearing-feature" />
                </div>
            </section>
            <section data-aos="fade-up" className="main__offer">
                <h2 className="main__offer title">Мы предлагаем</h2>
                {/* <div className="main__offer block"> */}
                    <ul className="main__offer list" data-aos="fade-up">
                        {offerConfig.map(({id, src, subtitle, text}) => (
                            <li key={id} className="main__offer block list list-item">
                                <div><img src={src} alt={subtitle} /></div>
                                <h3>{subtitle}</h3>
                                <p>{text}</p>
                                <button type="button" className="main button" onClick={onClick}>Оставить заявку</button>
                            </li>
                            )
                           )
                        }
                    </ul>
                    {/* <img src={Feature} alt="bearing-feature" /> */}
                {/* </div> */}
            </section>
            <section data-aos="fade-up" className="main__specials">
                <h2 className="main__specials title">Специальные условия</h2>
                <ul data-aos="fade-up" className="main__specials list">
                {specialConfig.map(({id, src, subtitle, text}) => (
                            <li key={id} className="main__special list list-item">
                                <img src={src} alt={subtitle} />
                                <h3>{subtitle}</h3>
                                <p>{text}</p>
                            </li>
                            )
                           )
                        }
                </ul>
            </section>
        </main>
    ) 
}

export default memo(Main);