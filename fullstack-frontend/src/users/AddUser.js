import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
    let navigate=useNavigate()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        gender:"",
        role:""
    })

    const{name,username,email,gender,role}=user

    const onInputChange=(e)=>{
            setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }

  return <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input 
                type={"text"} 
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                    Username
                </label>
                <input 
                type={"text"} 
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    Email
                </label>
                <input 
                type={"text"} 
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}                
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Gender</label>
                <div>
                    <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="male" 
                        checked={gender === "male"} 
                        onChange={(e)=>onInputChange(e)} 
                    />
                    <label htmlFor="male" className="mx-2">Male</label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female" 
                        checked={gender === "female"} 
                        onChange={(e)=>onInputChange(e)} 
                    />
                    <label htmlFor="female" className="mx-2">Female</label>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">
                    Role
                </label>
                <select 
                    className="form-select" 
                    id="role" 
                    name="role" 
                    value={role} 
                    onChange={(e)=>onInputChange(e)}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">Sumbit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
            </form>
        </div>
    </div>
      </div>;
// testing comment 
}
