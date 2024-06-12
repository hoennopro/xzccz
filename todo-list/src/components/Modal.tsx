import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default Modal;
