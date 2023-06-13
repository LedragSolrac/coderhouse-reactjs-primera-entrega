import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
           <div className="columns">
                <div className="column is-12 is-flex is-justify-content-center">
                    <h3> Mothertech </h3>
                </div>
            </div>
            <div className="columns is-flex">
                <button className="column is-3 is-flex is-justify-content-center button is-dark"> Procesadores </button>
                <button className="column is-3 is-flex is-justify-content-center button is-dark"> Placas de Video </button>
                <button className="column is-3 is-flex is-justify-content-center button is-dark"> Placas Madre </button>
                <button className="column is-3 is-flex is-justify-content-center button is-dark"> Fuentes </button>  
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;