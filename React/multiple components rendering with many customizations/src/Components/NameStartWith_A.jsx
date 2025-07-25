import products from "./Data";

function NameStartWith_A() {
    return (
        <>
            <h1>Name starts with 'a' or 'A'</h1>
            <div className="card-container">
                {
                    products.filter(item => item.name.slice(0,1).toLocaleLowerCase() == 'a').map(product => (

       
                        <div key={product.key} className={"card"} style={{ width: "18rem" }}>
                            <img src={product.image} className={"card-img-top"} />
                            <div className={"card-body"}>
                                <p className={"card-text"}>Item: {product.name}</p>
                                <p className={"card-text"}>Price: {product.price}</p>
                            </div>
                        </div>
                    ))
                }</div>
            <div className="divider-line"></div>
        </>
    )
}

export default NameStartWith_A
