import { useState, useEffect } from "react"
import "./style.scss"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"
import Modal from "../Modal"
import Background from "../../assets/wires.jpg"
import { createPortal } from "react-dom";

const Container = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        
    }

    const onEscape = (event) => {
        if (event.key === "Escape") setIsOpen(false)
    }

    return (
        <div className="container" onKeyDown={onEscape}>
            <div className="container__background">
                <img src={Background} alt="background"/>
            </div>
            <Header onClick={openModal} />
            <Main onClick={openModal} />
            <Footer />
            {isOpen ? createPortal(
            <Modal onClick={closeModal} />, document.body
            ) : null}
        </div>
)}

export default Container;