import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = ()=> {
        console.log(email, password)
    }

    return (
        <div className="register">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie"/>
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address..."
            onChange={(e) => setEmail(e.target.value) }
             />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value) }
            />
          </div>
          <input type="button" className="btn btn-primary form-control" value="Login"
            onClick = {handleSubmit}
           />
        </form>
      </div>
    </div>
    )
}

export default Login
