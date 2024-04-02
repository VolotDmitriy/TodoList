import Element from "./Element";

const Elements = ({elems}) => {
    return (
        <div className="elements-container">
            {elems.map((e, index) => (
                <Element key={index} elem={e}/>
            ))}
        </div>
    );
};
export default Elements;
