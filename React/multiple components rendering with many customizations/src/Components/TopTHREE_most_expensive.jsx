import products from "./Data";

let topThree = products.slice(products.length - 3);

export default function TopTHREE_most_expensive() {
    
  {topThree.sort((a,b)=> b.price - a.price);}

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
