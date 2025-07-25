import products from "./Data"


export default function InreasePriceByTEN_PERCNT() {
    {products.sort((a, b) => a.price - b.price);}

    return (
        <>
            <h1>Increase in price by 10%</h1>
            <div className="card-container">
                {
                    products.map(product => (
                        <div key={product.key} className={"card"} style={{ width: "18rem" }}>
                            <img src={product.image} className={"card-img-top"} />
                            <div className={"card-body"}>
                                <p className={"card-text"}>Item: {product.name}</p>
                                <p className={"card-text"}>10% Increased Price: {product.price / 10 + product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="divider-line"></div>

        </>
    )
}
