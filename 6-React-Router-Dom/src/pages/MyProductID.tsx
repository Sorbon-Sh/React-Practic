import { useParams } from "react-router-dom"

const MyProductID = () =>{
    const {id,name} = useParams()

    return(
        <div className="p-5">
        <h1>PoductID</h1>
        {id}
        <div>{name}</div>
        </div>
    )
}


export default MyProductID