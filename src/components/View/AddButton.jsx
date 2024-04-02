import {useState} from "react";
import AddModal from "../Modal/AddModal.jsx";
import "./View.scss"
const AddButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="add-button" onClick={() => setOpen(true)}>Add</button>
            <AddModal open={open} setOpen={setOpen} />
        </>
    );
};

export default AddButton;