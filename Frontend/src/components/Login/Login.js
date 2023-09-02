// import React from "react";
// // import './Login.css'

// const Login = () => {
//   return (
// <div class="container">
//   <div class="screen">
//     <div class="screencontent ">
//       <form class="login">
//         <div class="loginfield">
//           <i class="loginicon fas fa-user"></i>
//           <input
//             type="text"
//             class="logininput"
//             placeholder="Username/Email"
//           />
//         </div>
//         <div class="loginfield">
//           <i class="loginicon fas fa-lock"></i>
//           <input
//             type="password"
//             class="logininput"
//             placeholder="Password"
//           />
//         </div>

//         <button class="button loginsubmit mt-3">
//           <span class="buttontext">Log In Now</span>
//           <i class="buttonicon fas fa-chevron-right"></i>
//         </button>
//       </form>
//     </div>
//     <div class="screenbackground">
//       {/* <span class="screenbackgroundshape screenbackgroundshape4"></span>
//         <span class="screenbackgroundshape screenbackgroundshape3"></span>         */}
//       <span class="screenbackgroundshape screenbackgroundshape2"></span>
//       <span class="screenbackgroundshape screenbackground__shape1"></span>
//     </div>
//   </div>
// </div>

//   );
// };

// export default Login;

import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const LoginUser = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();
      const request = await fetch(`/api/v1/auth/login`, {
        method: "POST",
        headers: {
          authorization: "Basic " + btoa(userName + ":" + password),
        },
      });

      console.log(request);

      const data = await request.json();

      if (request.status === 401) {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 2000,
          isClosable: false,
          position: "top",
        });
      } else {
        localStorage.setItem("loggedIn", true);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <div className="screen">
        <div className="screencontent ">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 d-flex justify-content-center">
            <form
              onSubmit={login}
              className="Login m-5 p-5 bg-light shadow font-monospace"
            >
              <h2> Login</h2>

              <div className="loginfield  ">
                <i className="loginicon fas fa-user"> </i>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="text"
                  className="form-control"
                  placeholder="UserName"
                />
              </div>

              <div className="loginfield">
                <i className="loginicon fas fa-lock"></i>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <input
                className="button loginsubmit mt-3"
                type="submit"
                value="Login"
              ></input>
              <Link to={"/Register"} class="color-m">
                To Register
              </Link>
            </form>
          </div>

          <div className="screenbackground">
            {/* <span className="screenbackgroundshape screenbackgroundshape4"></span>
            <span className="screenbackgroundshape screenbackgroundshape3"></span>         */}
            <span className="screenbackgroundshape screenbackgroundshape2"></span>
            <span className="screenbackgroundshape screenbackground__shape1"></span>
          </div>
        </div>

        <div className="toast" role="alert">
          <div className="toast-header">
            <strong className="mr-auto">Error</strong>
            <small className="text-muted">10 mins ago</small>
            <button type="button" className="ml-2 mb-1 close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">Wrong Username or password..</div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;

// import React, { useState } from "react";
// import {ReactDOM} from "react-router-dom";

// import "./Login.css";

// function LoginUser() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="Login">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default LoginUser;

// import React from 'react'
// // import './Login.css'
// const Login = () => {
//   return (
//     <div className="container">
//     <div className="screen">
//         <div className="screencontent ">
//             <form className="login">

//                 <div className="loginfield">
//                     <i className="loginicon fas fa-user"></i>
//                     <input type="text" className="logininput" placeholder="Username/Email"/>
//                 </div>
//                 <div className="loginfield">
//                     <i className="loginicon fas fa-lock"></i>
//                     <input type="password" className="logininput" placeholder="Password"/>
//                 </div>

//                 <button className="button loginsubmit mt-3">
//                     <span className="buttontext">Log In Now</span>
//                     <i className="buttonicon fas fa-chevron-right"></i>
//                 </button>
//             </form>

//         </div>
//         <div className="screenbackground">
//             {/* <span className="screenbackgroundshape screenbackgroundshape4"></span>
//             <span className="screenbackgroundshape screenbackgroundshape3"></span>         */}
//             <span className="screenbackgroundshape screenbackgroundshape2"></span>
//             <span className="screenbackgroundshape screenbackground__shape1"></span>
//         </div>
//     </div>
// </div>
//   )
// }

// export default Login
