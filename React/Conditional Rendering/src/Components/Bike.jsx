export default function Bike() {
    let bikes = ["kawasaki", "Honda"];
    let amount;

    if (bikes.length() < 4) {
        amount = "Insufficient";
    } else {
        amount = "Sufficient";
    }

    return (
        <div>
            <p>Motorcycles in showroom are {amount} for exhibition.</p>
        </div>
    )
}
