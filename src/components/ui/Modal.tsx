import React from 'react';
import { MdClose } from 'react-icons/md';

type ModalPropsType = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalPropsType> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  return (
    <div>
      {isOpen && (
        <div
          className={`modal ${isOpen ? 'modal--visible' : ''}`}
          onClick={() => onClose(false)}
        >
          <div
            className="modal__content-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal__title">{title}</h2>
            <div className="modal__content">{children}</div>
            <button
              className="modal__close-button"
              onClick={() => onClose(false)}
            >
              <MdClose className="modal__close-button-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
