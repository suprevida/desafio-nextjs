import React from "react";
const ModalBuy = ({ modalBuy, setModalBuy, totalPrice, onPress }) => {
  if (modalBuy === true) {
    return (
      <div className="modal-buy-overlay">
        <div className="modal-buy-content">
          <span className="modal-buy-btn">
            <div className="button" onClick={() => {
                setModalBuy(false);
                onPress();
              }}> X </div>
          </span>

          <h1>Obrigado!</h1>
          <span>Você ganhou de volta R${totalPrice}</span>
        </div>
      </div>
    );
  }

  return null;
};

export default ModalBuy;