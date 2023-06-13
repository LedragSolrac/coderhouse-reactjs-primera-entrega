import cart from "./assets/cart.png"

const CartWidget = () => {
    return (
        <div className="is-flex is-align-items-center">
            <div className="">
                <figure className="image is-64x64">
                    <img src={cart} alt="cart-widget"></img>
                </figure>
            </div>
            <p className="">0</p>
        </div>
    )
}

export default CartWidget;