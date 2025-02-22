import {useState} from 'react'

function Login() {
  const[username,setUsername]=useState("");
  const[password, setPassword]=useState("");
  const[errorMessage,setErrorMessage]=useState("");

  const handleUserNameChange=(event)=>{
      setUsername(event.target.value);
  }
  const handlePasswordChange=(event)=>{
      setPassword(event.target.value);
  }
  const handleSubmit=(event)=>{
      event.preventDefault();
  
  if(username===""||password===""){
      setErrorMessage("please enter username & password")
  }
  if(username==='shivam'||password==='shivam'){
      console.log("Login is success")
  }
  else{
      setErrorMessage("Invalid username & password")
  }
  }

  return (
    <div>
        <h1>Welcome to Login Page</h1>
        <form>
          <div>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username"/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <br/>
            <br/>
          </div>
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login;