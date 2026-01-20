import { useState } from "react"
import { Increment,Decrement } from "./slice1";
import { useDispatch } from "react-redux";

export default function Card({ value }){
    const [card,setcard] = useState(false)


    const dispatch = useDispatch();
    if (!value) {
        return <div>Loading...</div>;
    }

    function Check(){
        if(!card){
           dispatch(Increment());
           setcard(true);
        }else{
            dispatch(Decrement());
            setcard(false);
        }
    }

    
    

    return(
      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
        <h1>{value.name}</h1>
        <h1>{value.price}</h1>
        <button onClick={Check}>{card?"Remove":"Add"}</button>
      </div>
    )
} 