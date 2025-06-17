import React, { useState } from 'react';
import '../assets/Login.css';
import { useNavigate } from 'react-router';
import userData from '../assets/user.json'
import useForm from '../Hooks/useForm';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {loginvalues,loginerr,loginValidation,validateLogin,setLoginerr} = useForm()
    const navitomain = useNavigate()
     const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateLogin()){
          const user = userData.find(user => user.email === loginvalues.email)
          if (user){
            if(user.password == loginvalues.password){
                navitomain("/home")
            }
            else{
            setLoginerr({...loginerr,loginer : "Invalid Password"})
            }
          } 
          else{
            alert("User Not Found")
          }
        }
      }
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center loginbg">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-md-12 col-lg-12 col-xl-8">
                    <div className="bg-transparent">
                        <div className="p-4 p-md-5">
                            <div className="row">
                                <div className="col-12 col-md-6  text-center mb-4 mb-md-0">
                                    <img 
                                        src="/images/loginpage/loginlogo.gif" 
                                        alt="Login illustration" 
                                        className="img-fluid loginlogo rounded-circle mb-4"
                                        style={{ maxWidth: '400px' }}
                                    />
                                </div>
                        
                                <div className="col-12 col-md-6 col-lg-6">
                                    <h2 className="fw-bold pb-5 text-center loginhead fs-1">Login</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <div className="input-group">
                                                <span className="input-group-text loginform border-1 border-end-0  border-dark bg-transparent">
                                                    <i className="bi bi-envelope"></i>
                                                </span>
                                                <input 
                                                    type="text" 
                                                    className="form-control border-1 border-start-0 border-dark ps-0 bg-transparent" 
                                                    placeholder="Enter your Email"
                                                    name = "email"
                                                    value = {loginvalues.email}
                                                    onChange={(e)=>loginValidation(e)}
                                                />
                                            </div>
                                            {loginerr.email && <p style={{ color: 'red' }}>{loginerr.email}</p>}
                                        </div>
                                        <div className="mb-2">
                                            <div className="input-group">
                                                <span className="input-group-text loginform border-1 border-end-0 border-dark bg-transparent ">
                                                    <i className="bi bi-lock"></i>
                                                </span>
                                                <input 
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control  border-1 border-start-0 border-end-0 border-dark ps-0 bg-transparent" 
                                                    placeholder="Password"
                                                    name = "password"
                                                    value = {loginvalues.password}
                                                    onChange={(e)=>loginValidation(e)}
                                                />
                                                <span 
                                                    className="input-group-text loginform bg-white border-start-0 cursor-pointer  border-1 border-start-0 border-dark ps-0 bg-transparent"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                                                </span>
                                            </div>
                                            {loginerr.password && <p style={{ color: 'red' }}>{loginerr.password}</p>}
                                            {loginerr.loginer && <p style={{ color: 'red' }}>{loginerr.loginer}</p>}    
                                        </div>
                                        <div className="text-end mb-3">
                                            <a href="#" className="text-decoration-none fw-bold text-dark loginhead small">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-warning w-100 py-2 mb-3 text-muted fw-bold fs-5 loginhead" style={{letterSpacing:"1px"}}
                                        >
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;