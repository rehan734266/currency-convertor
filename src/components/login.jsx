import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../apiClient";


const Login = () => {
      // You can add authentication logic here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Implement your login logic here
  console.log("Email:", email);
  console.log("Password:", password);

  const handleLogin = async() => {
    const users  = await getUsers()
    console.log("===============users============ ", users)
    const isUserVerified = users.find(user=>user.Name == password && user.Email === email)                                 
    console.log("isUserVerifies ----------- ", isUserVerified)
    if(isUserVerified){
        navigate('/home')
    }
    else{
        alert("invalid credentials")
    }

  };


  return (
    <div className="container mt-5" style={{ backgroundColor: "red" }}>
      <div className="row justify-content-center">
        <div className="col-md-15">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    EMAIL 
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
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
                  className="btn btn-primary w-100"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div style={{cursor:"pointer"}} onClick={() => {
                    navigate("/signup")}}>
                  <p>don't have an account? Sign up</p>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
