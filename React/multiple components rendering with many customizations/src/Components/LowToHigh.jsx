import products from "./Data"

export default function LowToHigh() {

    return (<>
        <h1>Sorting on price low to high</h1>
        <div className="card-container">
            {products.map(product => (

                <div key={product.key} className={"card"} style={{ width: "18rem" }}>
                    <img src={product.image} className={"card-img-top"} />
                    <div className={"card-body"}>
                        {/* {console.log(product)} */}
                        <p className={"card-text"}>Item: {product.name}</p>
                        <p className={"card-text"}>Price: {product.price}</p>
                    </div>
                </div>
            ))
            }
        </div>
        <div className="divider-line"></div>
    </>
    )
}
