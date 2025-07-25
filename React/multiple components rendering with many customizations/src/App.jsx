import AboveORbelowAverage from './Components/AboveORbelowAverage';
import GreaterThanFORTY_FIVE_THOUSAND from './Components/GreaterThanFORTY_FIVE_THOUSAND';
import InreasePriceByTEN_PERCNT from './Components/InreasePriceByTEN_PERCNT';
import LowToHigh from './Components/LowToHigh';
import NameStartWith_A from './Components/NameStartWith_A';
import TopTHREE_most_expensive from './Components/TopTHREE_most_expensive';
export default function App() {
    return (
        <>
            <LowToHigh />
            <GreaterThanFORTY_FIVE_THOUSAND />
            <InreasePriceByTEN_PERCNT />
            <NameStartWith_A />
        <TopTHREE_most_expensive/>
        <AboveORbelowAverage/>
        </>
    )
}