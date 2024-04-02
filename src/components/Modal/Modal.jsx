import "./Modal.scss";

const Modal = ({open, children}) => {
    if (!open) return null;

    return (
        <div className="modal-container">
            <div className="modal">{children}</div>
        </div>
    );
};

export default Modal;
