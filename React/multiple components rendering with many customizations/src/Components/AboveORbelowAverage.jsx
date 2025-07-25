import products from "./Data"

let average = 0;
products.forEach(product => {
    average += product.price;
})
average = Math.round(average / products.length);




export default function AboveORbelowAverage() {
    {products.sort((a, b) => a.price - b.price);}
    return (<>
        <h1>Price labeled as Below average or Above average</h1>
        <div className="card-container">
            
            {
                products.map(aboveAverageProduct => (
                    <div key={aboveAverageProduct.key} className={"card"} style={{ width: "18rem" }}>
                        <img src={aboveAverageProduct.image} className={"card-img-top"} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>Item: {aboveAverageProduct.name}</p>
                            <p className={"card-text"}>Price: {aboveAverageProduct.price}</p>
                            <p className={"card-text bg-warning-subtle text-center callout fw-bold"}>{aboveAverageProduct.price>average?"Above Average":"Below Average"}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}
