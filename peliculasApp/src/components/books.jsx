import { Link  } from "react-router-dom"

export default function Books({ item }) {
    
    const bookContainerStyle ={
        display:"flex",
        flexDirection:"column",
        width:"300px",
        height:"200px",
       
    }
    const bookInfoStyle ={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        color:"yellow",
        textDecoration:"none"
       
    }
    return (
        <div style={bookContainerStyle}>
            <Link style={bookInfoStyle} to={`/view/${item.id}`}>
            <img src={item.cover} width='200' alt={item.title} />
            <div>{item.title}</div>
            </Link>
        </div>
    )
}