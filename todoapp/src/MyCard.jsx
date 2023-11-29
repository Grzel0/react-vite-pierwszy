const MyCard = ({children}) =>{
    const cardStyle ={
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkkgrey",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "10px"
    } 
    return(
        <div style={cardStyle}>{children}</div>
    )
}

export default MyCard