import iconEye from './icon-eye-158746.png';
import iconHide from './icon-hide-2767146.png';
import Login from './Login';
import { useState, useEffect } from 'react';

export default function Registration(){
  const [inputName, setInputName] = useState('')
  const [inputLastName, setInputLastName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    password: "",
    passwordAgain: "",
  })

  const [data, setData] = useState([])


  const formData = [{
    name: inputName,
    lastName: inputLastName,
    password: password,
    passwordAgain: passwordAgain,
  }]





  const checkForm = (event)=>{
   event.preventDefault()

   if (!inputName) {
    setErrors({ ...errors, name: "Введите это поле" });

    return;
  }
  if (!inputLastName) {
    setErrors({ ...errors, lastName: "Введите это поле" });

    return;
  }

  if (!password) {
    setErrors({ ...errors, password: "Введите это поле" });

    return;
  }

  if (inputName.length <= 2) {
    setErrors({ ...errors, name: "Минимум 3 символа" });
    console.log("Минимум 3 символа")
    return;
  }
  
  if (inputLastName.length <= 2) {
    setErrors({ ...errors, lastName: "Минимум 3 символа" });
    console.log("Минимум 3 символа")
    return;
  }
  if (password.length <= 7) {
    setErrors({ ...errors, password: "Минимум 8 символов" });
    console.log("Минимум 8 символов")
    return;
  }


  if (password !== passwordAgain) {
    setErrors({ ...errors, passwordAgain: "Пароли не совпадают" });
  console.log("Erorr")
    return;
  }


  setErrors({name:"", lastName:"", password:"", passwordAgain:""})

  setData([...data, ...formData])

  localStorage.setItem("formData", JSON.stringify(data))

  }



    return(
      <>
        <div className="form-wrapper">
            <form className="form" onSubmit={checkForm}>
                <label>
                    Ваше имя
                </label>
                {errors.name && (
          <span className="text-red-500 my-2">{errors.name}</span>
        )}
                <input type="text" value={inputName} onChange={(event) =>{setInputName(event.target.value)}}  />
                <label>
                    Ваше фамилия
                </label>
                {errors.lastName && (
          <span className="text-red-500 my-2">{errors.lastName}</span>
        )}
                <input type="text" onChange={(event) =>{setInputLastName(event.target.value)}} value={inputLastName}/>
              <div>
                <label>
                    Пароль
                </label>
                {errors.password && (
          <span className="text-red-500 my-2">{errors.password}</span>
        )}
                <input type={`${showPassword ? "password": "text"}`} onChange={(event) =>{setPassword(event.target.value)}}  value={password}/>
                <img src={`${showPassword ? iconEye: iconHide}`} onClick={()=>{setShowPassword(!showPassword)}}/>
                </div>
                <label>
                    Повторить пароль
                </label>
                {errors.passwordAgain && (
          <span className="text-red-500 my-2">{errors.passwordAgain}</span>
        )}
                <input type={`${showPassword ? "password": "text"}`} onChange={(event) =>{setPasswordAgain(event.target.value)}} value={passwordAgain}/>
                <button>Регестрироваться</button>
            </form>


        </div>

        </>
    )
}