function marksTOgradeCONVERT(score) {
    if (score >= 90) {
        return "A+";
    } else if(score >= 80){
        return "A";
    }else if(score >= 70){
        return "B";
    }else if(score >= 60){
        return "C";
    }else if(score >= 50){
        return "D";
    }else{
        return "F";
    }
}

const Marks = (props) => {
    return (
        <>
            <div className="">
                <p> Students results</p>
                {
                
                    props.marksWithName.map(element => (
                        <li key={element.key}><span>Name:{element.name} Grade:{marksTOgradeCONVERT(element.marks)} </span> </li>
                    ))
                }
            </div>


        </>
    )
}

export default Marks;