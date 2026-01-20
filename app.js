import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./header"
import Card from "./card"
import { Provider } from 'react-redux';
import { store } from './store';


let arr = [
    {key:1, name:"aloo", price:100},
    {key:2, name:"bhat", price:100},
    {key:3, name:"dal", price:100},
    {key:4, name:"khata", price:100},
    {key:5, name:"khiri", price:100},
    {key:6, name:"saga", price:100},
    {key:7, name:"roti", price:100},
    {key:8, name:"ata", price:100},
    {key:9, name:"maida", price:100},
    {key:10, name:"dahi", price:100}
]

function Swigy(){

    return(
        <>
        <Header></Header>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {
            arr.map((value)=>(
                
                <div key={value.key} >
                <Card value={value}/>
                </div>
                
            )
            )
        }</div>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<Swigy></Swigy>
</Provider>)