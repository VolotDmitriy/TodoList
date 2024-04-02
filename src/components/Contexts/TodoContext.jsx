import {createContext, useState} from "react";

export const ArrContext = createContext({});

const TodoContext = ({children}) => {

    const [arr, setArr] = useState([
        {name: "name1", des: "Des1 test8"},
        {name: "name2", des: "Des2 test9"},
        {name: "name3", des: "Des3 test10"},
    ]);

    const add = (name, des) => {
        setArr([...arr, {name, des}]);
    }

    const deleteElement = (elem) => {
        setArr((arr) => arr.filter((e) => {
            return e !== elem;
        }))
    }

    return (
        <ArrContext.Provider value={{arr, add, deleteElement}}>
            {children}
        </ArrContext.Provider>
    );
}

export default TodoContext;
