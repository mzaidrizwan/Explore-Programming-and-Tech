import products from "./Data"

export default function GreaterThanFORTY_FIVE_THOUSAND() {
    { products.sort((a, b) => b.price - a.price) }


    return (<>
        <h1>Price is greater than 45000,sorted by price high to low</h1>
        <div className="card-container">
            {
                products.filter(product => product.price > 45000).map(filteredProduct => (
                    <div key={filteredProduct.key} className={"card"} style={{ width: "18rem" }}>
                        <img src={filteredProduct.image} className={"card-img-top"} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>Item: {filteredProduct.name}</p>
                            <p className={"card-text"}>Price: {filteredProduct.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="divider-line"></div>

    </>)
}
