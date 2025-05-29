import { Link } from "react-router-dom";

function Button(nisha){
    return(
        <Link to ="/Editpage">
        <button className="bg-blue-500">{nisha.title} </button>
    </Link>
    )
}
export default Button;