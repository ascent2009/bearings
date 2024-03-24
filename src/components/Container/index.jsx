import "./style.scss"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"
import Background from "../../assets/wires.jpg"

const Container = () => <div className="container">
    <div className="container__background">
        <img src={Background} alt="background"/>
    </div>
        
    <Header/>
    <Main />
    <Footer />
</div>

export default Container;