import React, { ReactNode, useEffect, useState } from 'react';
import './Modal.css'; // Import your modal CSS

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, children, onClose }) => {
    const [shouldRender, setShouldRender] = useState(show);
    useEffect(() => {
        if (show) setShouldRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setShouldRender(false);
    };
    return (
       shouldRender && <div
       className={`modal ${show ? 'showModal' : 'hide'}`}
       onAnimationEnd={onAnimationEnd}
   >
       <div className="modal-backdrop" onClick={onClose} />
       <div className="modal-content hide-scrollbar">
        {children}
        </div>
   </div>
    );
};

export default Modal;
