import { useState } from "react"
const Products = [
    {id: 1,
    name: "długopis",
    price: 10.32},
    {id: 2, name:"pomarańcza", price: 10.32},
    {id: 3, name:"proszek do prania", price:10.32},
    {id: 4, name:"latarka", price: 10.32}
]
const ProductForm = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
 
    function submitHandler(event){
        event.preventDefault()
        const product = {
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            price: price
        }
        Products.push(product)
        console.log(Products)
    }
 
    function onChangeName(event){
        setName(event.target.value)
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="nazwa projektu" value={name} onChange={onChangeName}/>
            <input type="number" placeholder="cena produktu" value={price} onChange={e => setPrice(e.target.value)}/>
            <button type="submit">Dodaj produkt</button>
        </form>
    )
}
 
export default ProductForm