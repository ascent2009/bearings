import { useState } from "react";
import {
  MainStyle,
  TitleBlockStyle,
  TitleStyle,
} from "./styles/Main.styled.js";
import { HeaderStyle, HamburgerStyle, Menu, MobileMenu } from "./styles/Header.styled.js";
import { ModalStyle, ImgStyle } from "./styles/Modal.styled.js";
import { OverlayStyle } from "./styles/Overlay.styled.js";
import { ButtonStyle } from "./styles/Button.styled.js";
import { FooterStyle } from "./styles/Footer.styled.js";
import { createPortal } from "react-dom";
import { producersLogos } from "../../producersLogos.js";
import CloseSvg from "../../assets/close.svg";
import HamburgerSvg from "../../assets/hamburger.svg";

const Container = () => {
    const [produsersModal, setProducersModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const showProducersModal = () => {setProducersModal(true); setMobileMenu(false)};
    const showContactModal = () => setContactModal(true, setMobileMenu(false));
    const showMobileMenu = () => setMobileMenu(!mobileMenu);
    const closeModal = () => {
      if (produsersModal) setProducersModal(false);
      if (contactModal) setContactModal(false);
      if (mobileMenu) setMobileMenu(false);
    };
    return (
        <>
      <HeaderStyle>
      <HamburgerStyle><img src={HamburgerSvg} alt="hamburger" style={{width: "100%", height: "100%"}} onClick={showMobileMenu}/></HamburgerStyle>
      <Menu>
        <ButtonStyle title="Производители" onClick={showProducersModal}>
          Производители
        </ButtonStyle>
        <ButtonStyle title="Контакты" onClick={showContactModal}>
          Контакты
        </ButtonStyle>
       </Menu>
        
      </HeaderStyle>
      <MainStyle>
        <TitleBlockStyle>
          <TitleStyle>Оригинальные подшипники</TitleStyle>
          <TitleStyle>Качество</TitleStyle>
          <TitleStyle>Надежность</TitleStyle>
          <TitleStyle>Лучшая цена</TitleStyle>
        </TitleBlockStyle>
      </MainStyle>
      <FooterStyle>
        <p>&copy;MPK Group 2023</p>
      </FooterStyle>
      {mobileMenu ? createPortal(
        <><MobileMenu>
          
          <ButtonStyle title="Производители" onClick={showProducersModal} >
            Производители
          </ButtonStyle>
          <ButtonStyle title="Контакты" onClick={showContactModal}>
            Контакты
          </ButtonStyle>
        </MobileMenu>
        <button
            type="button"
            onClick={closeModal}
            style={{
                    position: "absolute",
                    width: "66px",
                    height: "66px",
                    padding: "1px",
                    borderRadius: "50%",
                    top: "10px",
                    // zIndex: 3,
                    right: "10px",
                    border: "none",
                    outline: "none",
                    background: "inherit",
                    cursor: "pointer",
                    opacity: "0.6"
            }}
          >
            <img src={CloseSvg} alt="close me" />
          </button>
          </>
         ,
        document.body
      ) : ""}
      
      {produsersModal
        ? createPortal(
            <>
              <OverlayStyle onClick={closeModal}></OverlayStyle>
              <ModalStyle>
                {producersLogos.map(({ name, logoPath }) => (
                  <ImgStyle key={name} src={logoPath} alt={name} />
                ))}
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    position: "absolute",
                    width: "66px",
                    height: "66px",
                    padding: "1px",
                    borderRadius: "50%",
                    top: "-30px",
                    right: "-30px",
                    border: "none",
                    outline: "none",
                    background: "inherent",
                    cursor: "pointer",
                  }}
                >
                  <img src={CloseSvg} alt="close me" />
                </button>
              </ModalStyle>
            </>,
            document.body
          )
        : ""}
      {contactModal
        ? createPortal(
            <>
              <OverlayStyle onClick={closeModal}></OverlayStyle>
              <ModalStyle>
                <h3>e-mail:</h3>
                <h3>Телефон:</h3>
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    position: "absolute",
                    width: "66px",
                    height: "66px",
                    padding: "1px",
                    borderRadius: "50%",
                    top: "-30px",
                    right: "-30px",
                    border: "none",
                    outline: "none",
                    background: "inherent",
                    cursor: "pointer",
                  }}
                >
                  <img src={CloseSvg} alt="close me" />
                </button>
              </ModalStyle>
            </>,
            document.body
          )
        : ""}
    </>
    )
 }

 export default Container;