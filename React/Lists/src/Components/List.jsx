function Line(e) {
return(
    <li>the Car is {e.brand}</li>
)
}

export default function List() {
    let cars = [{ id: 1, brand: "Mercedez" },
    { id: 2, brand: "Audi" },
    { id: 3, brand: "BMW" }
    ];

    return (
        <div>
            <ul>
              { cars.map((car)=><Line key={car.id} brand={car.brand} />)}
            </ul>
        </div>
    )
}
