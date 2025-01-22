// // import React from 'react'
// //import Test from './components2/Activity1'
// //import Test from './components2/Activity2'
// // import UserList from './components2/Activity3';  // Assuming the file is named 'UserList.js'
// import Home from './components3/Home'
// import About from './components3/About'
// import Login from './components3/Login'
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import './App.css'

// function Header(){
//   return(
//     <ul>
//       <h1>Vasantdada Patil Pratishthan's College of Engineering and visual arts</h1>
//       <li><Link to="/home">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/login">Login</Link></li>
//     </ul>
//   )
// }

// function App() { 
//     return (
//     <div>     
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//       <Route path="/home" element={<Home/>}></Route>
//       <Route path="/about" element={<About/>}></Route>
//       <Route path="/login" element={<Login/>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App

import { useEffect } from "react"
function App() { 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response=>response.json()
    ).then(json=>console.log(json))
   },[])
    return (
    <div>     
     
    </div>
  )
}
export default App