import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login=()=>{

    let history = useNavigate();
    const [data,setData]=useState({
        username:"",
        name:"",
        password:"",
        email:""
        
    })

    const handleChange=(e)=>{
          setData({...data,[e.target.name]:e.target.value});
 

        //   console.log(data);
    }

    const submitFrom=(e)=>{
        e.preventDefault();
        const sendData={
            username:data.username,
            name:data.name,
            password:data.password,
            email:data.email
            
        }
        console.log(sendData);

        axios.post('http://localhost/bizlogic/insert.php',sendData)
        .then((result)=>{
            console.log(result);
            if(result.data.Status == 'Invalid'){
            alert('Invalid User');
            }
            else{
               history('/dashboard');
            }
        })
    }
    return(
        <div className="main-box">
            <form onSubmit={submitFrom}>
        <div className="row">
            <h2>
            <div className="col-md-12 text-center">LOGIN</div>
            </h2>
        </div>
        <div className="row">
    <div className="col-md-6">User name</div>
    <div className="col-md-6">
        <input type="text" name="username" className="form-control"
        onChange={handleChange} value={data.username}/>
    </div>
        </div>

        <div className="row">
    <div className="col-md-6">Name</div>
    <div className="col-md-6">
        <input type="text" name="name" className="form-control"
        onChange={handleChange} value={data.name}/>
    </div>
        </div>

        <div className="row">
    <div className="col-md-6">Password</div>
    <div className="col-md-6">
        <input type="password" name="password" className="form-control" 
        onChange={handleChange} value={data.password}
        />  
        <div>
            
          {/* if (password !== this.name.password){
            alert('Password is incorrect!')
      } */}
        </div>
    </div>
    
        </div>
    
        <div className="row">
    <div className="col-md-6">Email</div>
    <div className="col-md-6">
        <input type="email" name="email" className="form-control"
        onChange={handleChange} value={data.email}/>
    </div>
        </div>

        <div className="row">
    <div className="col-md-12 text-center">
        <input type="submit" name="submit" value="Login" className="btn btn-success"/>
    </div>
        </div>
        </form>
        </div>
    )
}

export default Login;