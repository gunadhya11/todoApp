import React from "react";
import "./modal.scss";
import ReactDOM from "react-dom";
const Modal = ({ showModal, children, footerComponent, closeModal, headerText }) => {
  if (!showModal) return null;
  return (
    <div className="modal open">
      <div className="modal-content bg-white w-1/2 p-4 rounded-lg">
        <div className="modal-header flex justify-between">
          <div className="text-2xl font-bold">{headerText}</div>
          <button className="rounded-full bg-gray-500 text-white w-8 h-8 " onClick={closeModal}>X</button>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">{footerComponent}</div>
      </div>
    </div>
  );
};

ReactDOM.createPortal(Modal, document.getElementById("pop-up"));

export default Modal;
