import React, {useState} from "react";

function CartaoUsuario(props){
    const [isHidden, setHide] = useState(true)
    

    return(
        <li style ={{ listStyle: "none"}}>
<img src={props.thumbnail} alt="thumbnail"  />
<h3>{props.name} </h3>

{isHidden ? (<div>
    <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}>Show Details</button>
</div>) : (
 <div>
 
 <div>{props.email}</div>
 <div>{props.location}</div>
 <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}>Hide Details</button>

 </div>
 )}

        </li>
    )
}






export default CartaoUsuario