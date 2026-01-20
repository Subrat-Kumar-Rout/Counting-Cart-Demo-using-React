import { useState } from "react"


export default function Card({ value }){

    if (!value) {
        return <div>Loading...</div>;
    }

    
    const [card,setcard] = useState(false)

    return(
      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
        <h1>{value.name}</h1>
        <h1>{value.price}</h1>
        <button onClick={()=>setcard(true)}>{card?"Remove":"Add"}</button>
      </div>
    )
} 