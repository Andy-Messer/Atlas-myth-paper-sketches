import React from "react";
import "./Home.css"
import background_vid from '../../videos/figure.mp4';
import {Link} from "react-router-dom"


export default function Home(props) {

    return (
    <div>
        <video className='videoTag' autoPlay loop muted>
            <source src={background_vid} type='video/mp4' />
        </video>
        
        <h1 className="h1-style"> Paper sketches</h1>
        <div className="Menu">
            <Link to="/login">
                <button class="button button_login_register">Login/Register</button>
            </Link>
        </div>
    </div>);
}