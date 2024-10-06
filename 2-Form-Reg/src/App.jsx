import { useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";

export default function App(){
  const [showLogin, setShowLogin] = useState(false)


  return(
    <div>
{/*       
   <Registration /> */}

<Login />
   
    </div>
  )
}