import {useContext, useEffect, useState} from "react";
import Modal from "./Modal";
import {ArrContext} from "../Contexts/TodoContext.jsx";

const AddModal = ({open, setOpen}) => {
    const [name, setName] = useState();
    const [des, setDes] = useState();
    


    const {add} = useContext(ArrContext);

    return (
        <Modal open={open}>
            <input className="modal__name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <textarea className="modal__desc" placeholder="Description" onChange={(e) => setDes(e.target.value)} />
            <button
                className="modal__save-button"
                onClick={() => {
                    setOpen(false);
                    add(name, des);
                }}
            >
                Save
            </button>
        </Modal>
    );
};

export default AddModal;
