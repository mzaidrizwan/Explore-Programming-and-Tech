import products from "./Data";

products.sort((a,b)=> b.price - a.price);
let topThree = products.slice(0, 3);

export default function TopTHREE_most_expensive() {
    

    return (<>
        <h1>Top 3 most expensive products</h1>
        <div className="card-container">
            {
                topThree.map(product => (
                    <div key={product.key} className={"card"} style={{ width: "18rem" }}>
                        <img src={product.image} className={"card-img-top"} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>Item: {product.name}</p>
                            <p className={"card-text"}>Price: {product.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="divider-line"></div>
    </>)
}
