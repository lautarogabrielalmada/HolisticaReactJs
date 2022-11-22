import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
    const bienvenida = "Bienvenidos a la tienda Holistica Alma";

    return(
        <div>
            <header>
                <NavBar/>
            </header>

            <main>
                <ItemListContainer greeting={bienvenida}/>
            </main>

        </div>
    );
}

export default App;