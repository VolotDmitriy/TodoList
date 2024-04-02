import {useContext, useState} from "react";
import Elements from "../Elements/Elements.jsx";
import {ArrContext} from "../Contexts/TodoContext.jsx";
import "./View.scss"

const ViewPart = () =>{
    const [viewInput, setViewInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const {arr} = useContext(ArrContext);

    const part = viewInput
            ? arr.filter((value) => value.name.includes(inputValue))
            : arr;

    return (
        <div className="filter-container">
            <button className="button-all" onClick={() => setViewInput(false)}>All</button>
            <button className="button-filter" onClick={() => setViewInput(true)}>Filter</button>
            {viewInput &&
                <input
                    className="filter-container__input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search"
                />
            }
            <Elements elems={part}/>
        </div>
    );
}

export default ViewPart;
