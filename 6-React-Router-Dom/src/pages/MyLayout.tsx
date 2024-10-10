import { Link, Outlet } from "react-router-dom"


// 
const MyLayout = () => {
    return(
        <div>
            {/* Направление к дочернему эементу */}
     <Link to="/HomePage" ><div>HomePage</div></Link> 

{/* Здесь отображаются дочерные элементы */}
    <Outlet />
        </div>
    )
}


export default MyLayout