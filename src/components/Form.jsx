import React, { useState } from 'react'

function Form() {

   const [name, setName] = useState("");
  
   const [email, setEmail] = useState("");

   const [password, setPassword] = useState("");

   const handleSubmit = (e) =>{
    // e.prevanteDefoult();
        alert("Your Data has been submitted"+ " " + name + " " + email + " " + password)
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} /> &nbsp;
           
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />&nbsp;

            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />

            <button>Submit</button>
        </form>
        <label>Name : {name}</label><br></br>
        <label>Email : {email}</label><br></br>
        <label>Password : {password}</label>
    </div>
  )
}

export default Form