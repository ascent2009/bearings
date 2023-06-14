// import { AppStyle } from "./components/styles/App.styled";
import { useState } from "react";
import {
  MainStyle,
  TitleBlockStyle,
  TitleStyle,
} from "./components/styles/Main.styled";
import { HeaderStyle } from "./components/styles/Header.styled";
import { ModalStyle, ImgStyle } from "./components/styles/Modal.styled";
import { OverlayStyle } from "./components/styles/Overlay.styled";
// import Button from "./components/Button/Button";
import { ButtonStyle } from "./components/styles/Button.styled";
import { FooterStyle } from "./components/styles/Footer.styled";
import { createPortal } from "react-dom";
import { producersLogos } from "./producersLogos.js";
import CloseSvg from "./assets/close.svg";

// const StyledApp = AppStyle;
// const StyledMain = MainStyle;
function App() {
  const [produsersModal, setProducersModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const showProducersModal = () => setProducersModal(true);
  const showContactModal = () => setContactModal(true);
  const closeModal = () => {
    if (produsersModal) setProducersModal(false);
    if (contactModal) setContactModal(false);
  };

  return (
    <>
      <HeaderStyle>
        <ButtonStyle title="Производители" onClick={showProducersModal}>
          Производители
        </ButtonStyle>
        <ButtonStyle title="Контакты" onClick={showContactModal}>
          Контакты
        </ButtonStyle>
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
      {produsersModal
        ? createPortal(
            <>
              <OverlayStyle onClick={closeModal}></OverlayStyle>
              <ModalStyle>
                {producersLogos.map(({ name, logoPath }) => (
                  <ImgStyle src={logoPath} alt={name} />
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
  );
}

export default App;
