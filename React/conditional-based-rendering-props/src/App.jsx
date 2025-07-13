import marksWithName from "./Components/collectedDATA";
import Marks from "./Components/marks";

let App = () => {
  return (
    <>
      <Marks marksWithName={marksWithName} />
    </>
  )
}

export default App;
