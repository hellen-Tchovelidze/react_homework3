import About from "../../Atom/about/About"
import Circle from "../../Atom/Circle/Circle"
import Result from "../../Atom/Result/Result"
import "./BluContainer.css"


function BluContainer() {
    return(
        <>
        <div className="BluCont">
<Result />
<Circle />
<About />
        </div>
        </>
    )
}


export default BluContainer