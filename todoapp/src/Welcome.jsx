const Welcome = ({startOnClick}) =>{
    return (
        <div>
            <h1>WELCOME</h1>
            <button onClick={()=>startOnClick(true)}>START</button>
        </div>
    )
}

export default Welcome