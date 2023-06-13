const ItemListContainer = ({ greeting }) => {
    return (
        
        <div className="columns">
            <div className="column is-12 is-flex is-justify-content-center">
                <h1>{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer;