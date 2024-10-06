
import iconEye from './icon-eye-158746.png';
import iconHide from './icon-hide-2767146.png';
import Modal from './Modal';
import { useState } from "react";

export default function Login(){
  const [loginValue, setLoginValue] = useState("")
  const [passwordValue, setPasswordValue]= useState("")
  const [showPassword, setShowPassword] = useState(true)
  const [modalShow, setModalShow] = useState(false)
   const [loginError, setLoginError] = useState({
    login: "",
    password: "",
    root: ""
   })

   const dataUser ={
    login: "mark",
    password: 123456789,
   }

   const checkLogin = (event)=>{
    event.preventDefault()
    
     
    if(!loginValue){
        setLoginError({...loginError, login: "Введите это поле"})
        return
    }
    if(!passwordValue){
        setLoginError({...loginError, password: "Введите это поле"})
        return
    }

    if(dataUser.login !== loginValue || dataUser.password !== +passwordValue){
        setLoginError({...loginError, root: "Такого пользователя нет"})
        return
    }

    

    setLoginError({login:"", password:"", root:""})

    setModalShow(true)

    
   }

   


    return(
        <div className="form-wrapper" >
            <form className="form" onSubmit={checkLogin}>
                <label>
                    Ваше имя
                </label>
                {loginError.login && (
          <span className="text-red-500 my-2">{loginError.login}</span>
        )}
                <input type="text" onChange={(event)=>{setLoginValue(event.target.value)}} value={loginValue}/>
              <div>
                <label>
                    Пароль
                </label>
                {loginError.password && (
          <span className="text-red-500 my-2">{loginError.password}</span>
        )}
                <input type={`${showPassword ? "password": "text"}`}  onChange={(event)=>{setPasswordValue(event.target.value)}} value={passwordValue}/>
                <img src={`${showPassword ? iconEye: iconHide}`} onClick={()=>{setShowPassword(!showPassword)}}/>
                </div>
                {loginError.root && (
          <span className="text-red-500 my-2">{loginError.root}</span>
        )}

                <button onClick={checkLogin}>Войти</button>
            </form>
 
      {modalShow && <Modal />}
       


        </div>
    )
}