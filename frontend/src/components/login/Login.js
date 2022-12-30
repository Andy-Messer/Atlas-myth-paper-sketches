import React from "react";
import "./Login.css"
import background_vid from '../../videos/figure.mp4';



export default function Login(props) {
    // const {user, loginUser, logoutUser} = useContext(AuthContext)
    
    // const registerUser = async (e) => {
    //     e.preventDefault()
    //     let res = await fetch('http://127.0.0.1:8000/api/create_profile/',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //         body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value})
    //     })
    // }

    return (
    <div>
        <video className='videoTag' autoPlay loop muted>
            <source src={background_vid} type='video/mp4' />
        </video>
        <h1 className="h1-style"> Paper sketches</h1>
        {/* <div className="LoginForm" onSubmit={(user) ? logoutUser : loginUser}> */}
        <div className="Menu">
            <div class="circle">
                <h2 className="h2-style">Login/Register</h2>
                <div class="text-field">
                    <label class="text-field__label" for="login">Login</label>
                    <input class="text-field__input" type="text" name="login" id="login" placeholder="Login"></input>
                </div>
                <br/>
                <div class="text-field">
                    <label class="text-field__label" for="password">Password</label>
                    <input class="text-field__input" type="text" name="password" id="password" placeholder="Password"></input>
                </div>
                <div>
                    <button class="form_login_button">Login</button>
                    <br></br>
                    <button class="form_register_button">Register</button>
                </div>
            </div>
        </div>

    </div>);
}