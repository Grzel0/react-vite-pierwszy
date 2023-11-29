import "./MyDate.css"

const MyDate = () =>{
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("pl-PL")
const formattedTime = currentDate.toLocaleTimeString("pl-PL")

    return (
        <div className="container">
            <p className="datastyle">{formattedDate}</p>
            <p className="timestyle">{formattedTime}</p>
        </div>
    )
}

export default MyDate