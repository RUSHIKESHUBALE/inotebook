import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name : "", email : "", password: "", cpassword: ""});
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name : credentials.name, email : credentials.email, password: credentials.password })
        });
        const jsonValues = await response.json();
        console.log(jsonValues);
        // Save the auth token and redirect 
        if( jsonValues.token){
            localStorage.setItem('token', jsonValues.token);
            history('/');
            props.showAlert("success", "Signup successfully")
        }else{
          props.showAlert("danger", "Invalid Inputs")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value = {credentials.name} onChange = {onChange} aria-describedby="emailHelp"  />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value = {credentials.email} onChange = {onChange} aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value = {credentials.password} onChange = {onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value = {credentials.cpassword} onChange = {onChange} />
                </div>
                <button type="submit" className="btn btn-primary my-2" >Submit</button> 
            </form>
        </div>
    )
}

export default Signup
