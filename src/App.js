
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css";

function App() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <ItemListContainer greeting={"Bienvenidos!"}/>
        </div>

    )
}

export default App;