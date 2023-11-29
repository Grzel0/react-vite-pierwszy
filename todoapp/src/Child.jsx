    import { useState } from "react"

function Child( {childdataHandler} ){
    const [userData, setuserData] = useState("")
    function getDataFromUser(event) {
        setuserData(event.target.value)
    }

    function dataSender() {
        childdataHandler(userData)
    }

    return(
        <div>
            <h4>Jakie dane chcesz wysłać do rodzica?</h4>
            <input type="text" value={userData} onChange={getDataFromUser} />
            <button onClick={dataSender}>Wyślij dane do rodzica</button>
        </div>
    )
}

export default Child