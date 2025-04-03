import React, { useState } from 'react'

function MultiInputHandling() {

const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    phone : "",
    age: "", 
});

const [submittedData, setSubmittedData] = useState(null);

const onchangeHandelar = (e) => {
    const {name, value} = e.target
    setFormdata({...formdata, [name]:value});
}   

const handlesubmit = (e) => {
  e.preventDefault(); 
   alert("Your Data Submitted");
   setSubmittedData(formdata); 
}


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={formdata.name} placeholder='Enter Name' name="name" onChange={onchangeHandelar} /><br />
            <input type="text" value={formdata.email} placeholder='Enter Email' name="email" onChange={onchangeHandelar} /><br />
            <input type="text" value={formdata.password} placeholder='Enter Password' name="password" onChange={onchangeHandelar} /><br />
            <input type="text" value={formdata.phone} placeholder='Enter Phone' name="phone" onChange={onchangeHandelar} /><br />
            <input type="text" value={formdata.age} placeholder='Enter Age' name="age" onChange={onchangeHandelar} /><br />
            <button type='submit'>Submit</button> 
        </form>

        {submittedData && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>

        
       
   
  )
}

export default MultiInputHandling