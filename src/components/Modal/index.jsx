import {memo, useState, useEffect} from "react"
import { useForm } from "react-hook-form";
import "./styles.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import Close from "../../assets/close-modal.svg"

const Modal = ({onClick}) => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
        onClick();
    };
    
    useEffect(() => {
        Aos.init({duration: 1000})
    },[])

    return (
    <>
        <div className="overlay" onClick={onClick}></div>
        <section className="modal" data-aos="zoom-out-left">
            <button className="modal__button-close"><img src={Close} alt="close" onClick={onClick} /></button>
            <h2 className="modal__title">Оставьте свои контактные данные, и мы с вами свяжемся</h2>
            <form className="modal__form" type="submit" onSubmit={handleSubmit(onSubmit)}>
                <div className="modal__form_input block">
                    <input type="tel" placeholder="телефон" className="modal__form_input block input" {...register("phone", {required: true})}></input>
                    {errors.phone?.type === "required" && (
                        <small className="modal__form_input block error">* введите номер телефона</small>
                    )}
                </div>
                <div className="modal__form_input block">
                    <input type="email" placeholder="email" className="modal__form_input block input" {...register("email", {required: true})}></input>
                    {errors.email?.type === "required" && (
                        <small className="modal__form_input block error">* укажите электронную почту</small>
                    )}
                </div>
                <button className="button">Отправить</button>
            </form>
        </section>
    </>
)}


export default memo(Modal);