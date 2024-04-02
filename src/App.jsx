import "./App.css";
import ViewPart from "./components/View/ViewPart.jsx";
import TodoContext from "./components/Contexts/TodoContext.jsx";
import AddButton from "./components/View/AddButton.jsx";


const App = () => {

    return (
        <TodoContext>
            <AddButton />
            <ViewPart />
        </TodoContext>
    );
}
export default App;
