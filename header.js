import { useSelector } from "react-redux";


export default function Header(){

    const count = useSelector((state) => state.counter.count);

    return(
        <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
        <h1>Swiggy</h1>
        <h2>Count {count}</h2>
        </div>
    )
}