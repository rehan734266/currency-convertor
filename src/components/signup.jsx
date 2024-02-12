import { useEffect, useState } from "react";
import { createUser } from "../../apiClient";
import { Navigate, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async() => {
    const user = {
        Email: email,
        Image:
          "https://github.com/NiKHiLkr23/company-settings-CRUD/blob/f56fbeabecaa90f9700aad3b9e99dbb95cd82f93/public/images/ProfilePicture5.jpg?raw=true",
        Name: password, 
        Role: "administrator",
        Status: true,
      }
      
      // useEffect(()=>{
      //   createUser(email,password)
      // },[])
    try{
   await createUser(user);
   navigate('/home')
  } catch(error){
    alert('invalid credentials');
    console.error(error)
  }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-15">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Password 
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <button
                 
                  type="button"
                  className="btn btn-primary w-100, mt-3"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
