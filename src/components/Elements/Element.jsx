import "./Elements.scss";
import {useContext} from "react";
import {ArrContext} from "../Contexts/TodoContext.jsx";


const Element = ({elem}) => {

    const {deleteElement} = useContext(ArrContext);
    
    return (
        <div className="element">
            <div className="element__name">{elem.name}</div>
            <div className="vertical-line"></div>
            <div className="element__des">{elem.des}</div>
            <button className="element__delete" onClick={() => deleteElement(elem)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
};

export default Element;
