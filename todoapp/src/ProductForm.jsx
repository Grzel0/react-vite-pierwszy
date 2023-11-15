import { useState } from "react"

const Products = [
    {id:1,
    name:"dlugpois",
    price: 10.32},
    {id:2,
    name:"pomarancza",
    price: 10.32},
    {id:3,
    name:"proszek do prania",
    price: 10.32},
    {id:4,
    name:"latarka",
    price: 10.32},
]

const ProductForm = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)

    function submitHandler(){

    }

    function onChangeName(event){
        setName(e.target.value)
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text"
                placeholder="Nazwa produktu"
                value={name}
                onChange={onChangeName} />
            <input type="number"
                placeholder="Cena Produktu"
                value={price}
                onChange={() => 0} />
            <button type="submit">Dodaj produkt</button>
        </form>
    )
}

export default ProductForm